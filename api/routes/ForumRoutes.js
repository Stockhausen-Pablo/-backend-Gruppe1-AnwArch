module.exports = (app)=> {

  const users = require('../controllers/UsersController');
  const categories = require('../controllers/CategoriesController');
  const topics = require('../controllers/TopicsController');
  const posts = require('../controllers/PostsController');

  //Users
  app.post("/users", users.create);

  app.get("/users", users.findAll);

  app.get("/users/:userId", users.findOne);

  app.put("/users/:userId", users.update);

  app.delete("/users/:userId", users.delete);

  app.delete("/users", users.deleteAll);

  //Categories
  app.post("/categories", categories.create);

  app.get("/categories", categories.findAll);

  app.get("/categories/:categoryId", categories.findOne);

  app.put("/categories/:categoryId", categories.update);

  app.delete("/categories/:categoriesId", categories.delete);

  app.delete("/categories", categories.deleteAll);

  //Topics
  app.post("/topics", topics.create);

  app.get("/topics", topics.findAll);

  app.get("/topics/:topicId", topics.findOne);

  app.put("/topics/:topicId", topics.update);

  app.delete("/topics/:topicId", topics.delete);

  app.delete("/topics", topics.deleteAll);

  //Posts
  app.post("/posts", posts.create);

  app.get("/posts", posts.findAll);

  app.get("/posts/:postId", posts.findOne);

  app.put("/posts/:postId", posts.update);

  app.delete("/posts/:postId", posts.delete);

  app.delete("/posts", posts.deleteAll);

};
