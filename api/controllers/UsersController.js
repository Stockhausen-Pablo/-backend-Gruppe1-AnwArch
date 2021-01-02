const User = require("../models/User.js");
const md5 = require('md5');

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const user = new User({ 
    name: req.body.user_name,
    pass: md5(req.body.user_pass),
    email: req.body.user_email,
    date: req.body.user_date,
    level: req.body.user_level,
    role: req.body.user_role,
    permission: req.body.user_permission
  });

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });  
};

exports.authenticate = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const user = new User({
    name: req.body.user_name,
    pass: md5(req.body.user_pass)
  });

  User.authenticate(user,(err, data) => {
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while authenticating the User."
      });
    else res.send(data);
  });
}

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });  
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  User.remove(req.params.userId,(err, data) => {
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while deleting user."
      });
    else res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  
};
