exports.saveState = (client, db) => {
  return async (req, res) => {
    const {userUpdate, queueUpdates, userWordsUpdates} = req.body;
    const userId = userUpdate.id;

    async function saveUser(session) {
      const usersCollection = db.collection("users");
      await usersCollection.replaceOne(
        {id: userUpdate.id},
        userUpdate,
        {session}
      );
    }

    async function saveQueue(session) {
      if (!queueUpdates.length) {
        return;
      }
      const zCollection = db.collection(`z_${userId}_0`);
      await zCollection.bulkWrite(
        queueUpdates.map(q => {
          return {
            updateOne: {
              filter: {wordId: q.wordId},
              update: {$set: q},
              upsert: true,
              session
            }
          }
        }));
    }

    async function saveUserWords(session) {
      if (!userWordsUpdates.length) {
        return;
      }
      const zCollection = db.collection(`z_${userId}_1`);
      await zCollection.bulkWrite(userWordsUpdates.map(b => {
        return {
          updateOne: {
            filter: {level: b.level, categoryId: b.categoryId},
            update: {$set: b},
            upsert: true,
            session
          }
        }
      }));
    }

    const transactionOptions = {
      readConcern: {level: 'snapshot'},
      writeConcern: {w: 'majority'},
      readPreference: 'primary'
    };

    const session = client.startSession();

    try {
      session.startTransaction(transactionOptions);
      await saveUser(session);
      await saveQueue(session);
      await saveUserWords(session);
      await session.commitTransaction();
      console.log('Transaction successfully committed.');
      return res.json({ok: 'ok'});

    } catch (error) {
      if (error instanceof MongoError && error.hasErrorLabel('UnknownTransactionCommitResult')) {
        // add your logic to retry or handle the error
      } else if (error instanceof MongoError && error.hasErrorLabel('TransientTransactionError')) {
        // add your logic to retry or handle the error
      } else {
        console.log('An error occured in the transaction, performing a data rollback:' + error);
      }
      await session.abortTransaction();
    } finally {
      await session.endSession();
    }
  }
}
