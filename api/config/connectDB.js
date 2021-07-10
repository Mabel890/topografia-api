require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: "postgres",
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../model/users")(sequelize, Sequelize);
db.points = require("../model/points")(sequelize, Sequelize);
db.roles = require("../model/roles")(sequelize, Sequelize);
db.topographicBooklet = require("../model/topographicBooklet")(sequelize, Sequelize);
db.typeOfTopographicSurvey = require("../model/typeOfTopographicSurvey")(sequelize, Sequelize);

module.exports = db;
