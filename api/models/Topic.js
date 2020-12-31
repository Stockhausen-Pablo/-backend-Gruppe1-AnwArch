const sql = require("./topics_db.js");

// constructor
const Topic = function(topic) {
  this.topic_subject = topic.subject;
  this.topic_date = topic.date;
  this.topic_cat = topic.category;
  this.topic_by = topic.by;
};

Topic.create = (newTopic, result) => {
  sql.query("INSERT INTO topics SET ?", newTopic, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Topic: ", { id: res.insertId, ...newTopic });
    result(null, { id: res.insertId, ...newTopic });
  });
};

Topic.findById = (topicId, result) => {
  sql.query(`SELECT * FROM topics WHERE topics_id = ${topicId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found topic: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "topic not_found" }, null);
  });
};

Topic.getAll = result => {
  sql.query("SELECT * FROM topics", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("topics: ", res);
    result(null, res);
  });
};

Topic.updateById = (id, topic, result) => {
  sql.query(
      "UPDATE topic SET topic_subject = ?, topic_date = ?, topic_cat = ?, topic_by = ? WHERE topic_id = ?",
      [topic.topic_subject,topic.topic_date,topic.topic_cat,topic.topic_by],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("updated topic: ", { id: id, ...topic });
        result(null, { id: id, ...topic });
      }
  );
};

Topic.remove = (id, result) => {
  sql.query("DELETE FROM topics WHERE topic_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted topic with topic_id: ", id);
    result(null, res);
  });
};

Topic.removeAll = result => {
  sql.query("DELETE FROM topics", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} topics`);
    result(null, res);
  });
};

module.exports = Topic;
