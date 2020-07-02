INSERT INTO todos (text, complete, createdAt, updatedAt) 
-- Had to manually enter createdAt & updatedAt since sequelize defualts to adding these columns
VALUES ("Test todo 1", 0, "2020-07-01 04:10:32", "2020-07-01 04:10:32"),
("Test todo 2", 0, "2020-07-01 04:10:32", "2020-07-01 04:10:32");
