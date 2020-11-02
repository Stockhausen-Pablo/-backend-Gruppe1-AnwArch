var mysql = require ('mysql');

var pool = mysql.createPool({
    connectionLimit: 5,
    host: '104.155.25.224',
    user: 'root',
    password: 'archanw', 
    database: 'topics'
});

exports.list_all_topics = function(req, res) {
  pool.getConnection(function(err,con) {
  if (err) throw err;
  con.query("SELECT * FROM topics", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    con.release();
    res.json(result);
  });
 });
};


exports.create_a_topic = function(req, res) {
  var new_topic = new Topic(req.body);
  new_topic.save(function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};


exports.read_a_topic = function(req, res) {
  Topic.findById(req.params.topicId, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};


exports.update_a_topic = function(req, res) {
  Topic.findOneAndUpdate({_id: req.params.topicId}, req.body, {new: true}, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};


exports.delete_a_topic = function(req, res) {


  Topic.remove({
    _id: req.params.topicId
  }, function(err, topic) {
    if (err)
      res.send(err);
    res.json({ message: 'Topic successfully deleted' });
  });
};
