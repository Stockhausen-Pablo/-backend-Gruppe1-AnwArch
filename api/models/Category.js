const sql = require("./categories_db.js");

// constructor
const Category  = function(category) {
    this.cat_name = category.cat_name;
    this.cat_description = category.cat_description;
};

Category.create = (newCategory, result) => {
    sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created category: ", { id: res.insertId, ...newCategory });
        result(null, { id: res.insertId, ...newCategory });
    });
};

Category.findById = (categoryId, result) => {
    sql.query(`SELECT * FROM categories WHERE cat_id = ${categoryId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found category: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "category not_found" }, null);
    });
};

Category.getAll = result => {
    sql.query("SELECT * FROM categories", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("categories: ", res);
        result(null, res);
    });
};

Category.updateById = (id, category, result) => {
    sql.query(
        "UPDATE category SET cat_name = ?, cat_description = ? WHERE cat_id = ?",
        [category.cat_name,category.cat_description],
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

            console.log("updated category: ", { id: id, ...category });
            result(null, { id: id, ...category });
        }
    );
};

Category.remove = (id, result) => {
    sql.query("DELETE FROM categories WHERE cat_id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted category with cat_id: ", id);
        result(null, res);
    });
};

Category.removeAll = result => {
    sql.query("DELETE FROM categories", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} categories`);
        result(null, res);
    });
};

module.exports = Category;
