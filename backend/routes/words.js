const auth = require("./auth");

exports.getWords = (db) => {
  return async (req, res) => {
    const id = auth.routeGuard(req, res);

    const {categoryId, level} = req.query;

    if (categoryId && level) {
      words = await db.collection('words')
        .find({
          $and: [
            {
              categoryId: {$eq: categoryId}
            },
            {
              level: {$eq: Number(level)}
            },
          ]
        })
        .toArray();

      return res.json(words);
    }
  }
}
