module.exports = (app)=> {
 
  const users = require('../controllers/UsersController');
  const categories = require('../controllers/CategoriesController');

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

};
