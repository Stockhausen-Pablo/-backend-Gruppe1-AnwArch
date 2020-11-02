'use strict';
module.exports = function(app) {
  var topicList = require('../controllers/TopicController');

  app.route('/topics')
    .get(topicList.list_all_topics)
    .post(topicList.create_a_topic);


  app.route('/topic/:topicId')
    .get(topicList.read_a_topic)
    .put(topicList.update_a_topic)
    .delete(topicList.delete_a_topic);
};
