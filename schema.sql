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