const auth = require("./auth");

exports.getUser = (db) => {
  return async (req, res) => {
    const id = auth.routeGuard(req, res);

    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ id });

    delete user._id;

    res.type("json");
    res.send(user);
  }
}

exports.getUserData = (db) => {
  return async (req, res) => {
    const id = auth.routeGuard(req, res);

    const zCollection = db.collection(`z_${id}`);
    const items = await zCollection
      .find()
      .sort({ position: 1 })
      .project({ _id: 0 })
      .limit(1000)
      .toArray();

    res.type("json");
    res.send(items);
  }
}

exports.updateUserData = (db) => {
  return async (req, res) => {
    const id = auth.routeGuard(req, res);

    const { categoryId, level, variant, result } = req.body;

    const category = await db.collection(`z_${id}`).findOne({ category: categoryId });

    const updatedCategory = {...category};


    let nextI = null; // next level
    let nextJ = null; // next variant
    updatedCategory.levels.forEach((l, i) => {
      if (i === nextI) {
        l.enabled = true;
        l.variants[0].enabled = true;
      }

      if (l.level === level) {
        nextI = i + 1;

        l.variants.forEach((v, j) => {
          if (j === nextJ) {
            v.enabled = true;
          }

          if (v.variant === variant) {
            v.result = result;
            nextJ = j + 1;
          }

        });
      }
    });

    await db.collection(`z_${id}`).updateOne(
      { category: categoryId },
      { $set: { levels: updatedCategory.levels } }
    );

    res.type("json");
    res.send(updatedCategory);
  }
}
