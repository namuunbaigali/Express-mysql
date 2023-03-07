CREATE TABLE
    category (
        id int unsigned AUTO_INCREMENT,
        name varchar(255),
        slug varchar(255),
        imageUrl varchar(200),
        productCount int unsigned DEFAULT '0',
        createdAt datetime,
        PRIMARY KEY (id)
    );

CREATE TABLE
    product (
        id int unsigned AUTO_INCREMENT,
        name varchar(255),
        slug varchar(255),
        imageUrl varchar(200),
        productCount int unsigned DEFAULT '0',
        createdAt datetime,
        PRIMARY KEY (id)
    );

INSERT INTO
    product (name, slug, createdAt) value('koko', 'hoho', now());

--todocatgeory

CREATE TABLE
    todoCategory(
        id int unsigned AUTO_INCREMENT,
        name varchar(255),
        PRIMARY key(id)
    );

--todo

create table
    todo(
        id int unsigned AUTO_INCREMENT,
        name varchar(255),
        isDone BOOLEAN DEFAULT 0,
        todoCategoryId INT UNSIGNED,
        PRIMARY KEY(id),
        Foreign Key (todoCategoryId) REFERENCES todoCategory (id)
    );

INSERT into todoCategory VALUES (NULL, ' Must do');

INSERT INTO todo VALUES (NULL,'Brush teeth',0,1);