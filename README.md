# backend-Gruppe1-AnwArch

Dieses Projekt enstand im Rahmen des Moduls: "Entwicklung von Webanwendungen und Architekturen".


# MYSQL

Zum Starten wird MYSQL benötigt. Das Default-Developer-Paket eignet sich sehr gut.

Konfiguration:
local: TCP/IP
port : 3306
rootu: root
rootpw : archanw

Nach der Installation müssen folgende Querys ausgelöst werden:

#

CREATE DATABASE users;

CREATE DATABASE categories;

CREATE DATABASE topics;

CREATE DATABASE posts;

#

USE users;

CREATE TABLE users (
user_id     INT(8) NOT NULL AUTO_INCREMENT,
user_name   VARCHAR(30) NOT NULL,
user_pass   VARCHAR(255) NOT NULL,
user_email  VARCHAR(255) NOT NULL,
user_date   DATETIME NOT NULL,
user_level  INT(8) NOT NULL,
UNIQUE INDEX user_name_unique (user_name),
PRIMARY KEY (user_id)
);

USE categories;

CREATE TABLE categories (
cat_id          INT(8) NOT NULL AUTO_INCREMENT,
cat_name        VARCHAR(255) NOT NULL,
cat_description     VARCHAR(255) NOT NULL,
UNIQUE INDEX cat_name_unique (cat_name),
PRIMARY KEY (cat_id)
);

USE topics;

CREATE TABLE topics (
topic_id        INT(8) NOT NULL AUTO_INCREMENT,
topic_subject       VARCHAR(255) NOT NULL,
topic_date      DATETIME NOT NULL,
topic_cat       INT(8) NOT NULL,
topic_by        INT(8) NOT NULL,
PRIMARY KEY (topic_id)
);

USE posts;

CREATE TABLE posts (
post_id         INT(8) NOT NULL AUTO_INCREMENT,
post_content        TEXT NOT NULL,
post_date       DATETIME NOT NULL,
post_topic      INT(8) NOT NULL,
post_by     INT(8) NOT NULL,
PRIMARY KEY (post_id)
);

#

ALTER TABLE topics ADD FOREIGN KEY(topic_cat) REFERENCES categories.categories(cat_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE topics ADD FOREIGN KEY(topic_by) REFERENCES users.users(user_id) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE posts ADD FOREIGN KEY(post_topic) REFERENCES topics.topics(topic_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE posts ADD FOREIGN KEY(post_by) REFERENCES users.users(user_id) ON DELETE RESTRICT ON UPDATE CASCADE;

#

UPDATE users SET user_pass = MD5(user_pass)

ALTER Table users ADD COLUMN user_role VARCHAR(15) AFTER user_level;
ALTER Table users ADD COLUMN user_permission VARCHAR(15) AFTER user_role;

# BACKEND STARTEN

Folgende Konfiguration sollte eingerichtet werden, um das backend zu starten oder zu debuggen:

![alt text](https://i.imgur.com/a9fLbkW.jpg)


Manueller Start:

SET NODE_ENV=development

node server.js