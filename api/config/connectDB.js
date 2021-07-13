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
db.Users = require("../model/users")(sequelize, Sequelize);
db.Points = require("../model/points")(sequelize, Sequelize);
db.Roles = require("../model/roles")(sequelize, Sequelize);
db.TopographicBooklet = require("../model/topographicBooklet")(sequelize, Sequelize);
db.TypeOfTopographicSurvey = require("../model/typeOfTopographicSurvey")(sequelize, Sequelize);

module.exports = db;
