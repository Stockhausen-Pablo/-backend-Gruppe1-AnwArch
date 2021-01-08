module.exports = (app)=> {

  const users = require('../controllers/UsersController');
  const categories = require('../controllers/CategoriesController');
  const topics = require('../controllers/TopicsController');
  const posts = require('../controllers/PostsController');

  //Users
  app.post("/api/v1/users/register", users.create);

  app.get("/api/v1/users", users.findAll);

  app.get("/api/v1/users/:userId", users.findOne);

  app.put("/api/v1/users/:userId", users.update);

  app.delete("/api/v1/users/:userId", users.delete);

  app.delete("/api/v1/users", users.deleteAll);

  app.post("/api/v1/users/authenticate", users.authenticate);

  //Categories
  app.post("/api/v1/categories", categories.create);

  app.get("/api/v1/categories", categories.findAll);

  app.get("/api/v1/categories/:categoryId", categories.findOne);

  app.put("/api/v1/categories/:categoryId", categories.update);

  app.delete("/api/v1/categories/:categoriesId", categories.delete);

  app.delete("/api/v1/categories", categories.deleteAll);

  //Topics
  app.post("/api/v1/topics/register", topics.create);

  app.get("/api/v1/topics", topics.findAll);

  app.get("/api/v1/topics/all/:categoryID", topics.findAllbyID);

  app.get("/api/v1/topics/:topicId", topics.findOne);

  app.put("/api/v1/topics/:topicId", topics.update);

  app.delete("/api/v1/topics/:topicId", topics.delete);

  app.delete("/api/v1/topics", topics.deleteAll);

  //Posts
  app.post("/api/v1/posts/register", posts.create);

  app.get("/api/v1/posts", posts.findAll);

  app.get("/api/v1/posts/:postId", posts.findOne);

  app.put("/api/v1/posts/:postId", posts.update);

  app.delete("/api/v1/posts/:postId", posts.delete);

  app.delete("/api/v1/posts", posts.deleteAll);

};
