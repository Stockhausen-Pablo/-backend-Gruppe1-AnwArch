const sql = require("./posts_db.js");

// constructor
const Post = function(post) {
    this.post_content = post.post_content;
    this.post_date = post.post_date;
    this.post_topic = post.post_topic;
    this.post_by = post.post_by;
};

Post.create = (newPost, result) => {
    sql.query("INSERT INTO posts SET ?", newPost, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Post: ", { id: res.insertId, ...newPost });
        result(null, { id: res.insertId, ...newPost });
    });
};

Post.findById = (postId, result) => {
    sql.query(`SELECT * FROM posts WHERE post_id = ${postId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found post: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "post not_found" }, null);
    });
};

Post.getAll = result => {
    sql.query("SELECT * FROM posts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("posts: ", res);
        result(null, res);
    });
};

Post.updateById = (id, post, result) => {
    sql.query(
        "UPDATE post SET post_content = ?, post_date = ?, post_topic = ?, post_by = ? WHERE post_id = ?",
        [post.post_content,post.post_date,post.post_topic,post.post_by],
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

            console.log("updated post: ", { id: id, ...post });
            result(null, { id: id, ...post });
        }
    );
};

Post.remove = (id, result) => {
    sql.query("DELETE FROM posts WHERE post_id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted post with post_id: ", id);
        result(null, res);
    });
};

Post.removeAll = result => {
    sql.query("DELETE FROM posts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} posts`);
        result(null, res);
    });
};

module.exports = Post;
