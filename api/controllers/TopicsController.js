const Topic = require("../models/Topic.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const topic = new Topic({
    subject: req.body.topic_subject,
    date: req.body.topic_date,
    category: req.body.topic_cat,
    by: req.body.topic_by,
    content: req.body.topic_content
  });

  Topic.create(topic, (err, data) => {
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Topic."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Topic.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving topics."
      });
    else res.send(data);
  });
};

exports.findAllbyID = (req, res) => {
  Topic.getAllbyID(req.params.categoryID, (err, data) => {
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving topics."
      });
    else res.send(data);
  });

}

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
