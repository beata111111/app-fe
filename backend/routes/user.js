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

exports.setActiveCategories = (db) => {
  return async (req, res) => {
    const id = auth.routeGuard(req, res);
    const { categories } = req.body;

    const usersCollection = db.collection("users");
    const user = await usersCollection.findOneAndUpdate(
      { id },
      { $set: { activeCategories: categories } },
      { upsert: true, returnDocument: "after" }
    );

    res.type("json");
    res.send(user.value);
  }
}
