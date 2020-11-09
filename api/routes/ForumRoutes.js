module.exports = (app)=> {
 
  const users = require('../controllers/UsersController');
  const categories = require('../controllers/CategoriesController');
  const topics = require('../controllers/TopicsController');

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

  //Categories
  app.post("/topics", topics.create);

  app.get("/topics", topics.findAll);

  app.get("/topics/:topicId", topics.findOne);

  app.put("/topics/:topicId", topics.update);

  app.delete("/topics/:topicId", topics.delete);

  app.delete("/topics", topic.deleteAll);

};
