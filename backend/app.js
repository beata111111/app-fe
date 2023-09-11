const express = require("express");
const mongodb = require("mongodb");

const auth = require('./routes/auth');
const user = require('./routes/user');
const state = require('./routes/state');

const app = express();
app.use(require("cors")());
app.use(require("body-parser").json());

const uri = "mongodb+srv://beata111:wirowiro@cluster0.keyagdk.mongodb.net/?retryWrites=true&w=majority";

mongodb.MongoClient.connect(uri, (err, client) => {
  let db = client.db("languages_app_new");

  app.get("/", (req, res) => {
    res.type("text/plain");
    res.status(200);
    res.send("Hallo");
  });

  // auth
  app.post("/api/create-user", auth.createUser(db));
  app.post("/api/login-user", auth.loginUser(db));
  // user
  app.get("/api/get-user", user.getUser(db));
  app.post("/api/set-active-categories", user.setActiveCategories(db));
  //state
  app.post("/api/save-state", state.saveState(client, db));

  app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.send("404 Not found ☕_☕");
  });

  // listen for requests
  app.listen(process.env.PORT || 5678, () => {
    console.log("Your app is listening on port ", process.env.PORT || 5678);
  });
});