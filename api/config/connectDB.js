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
const Users = require("../model/users")(sequelize, Sequelize);
const Roles = require("../model/roles")(sequelize, Sequelize);

Roles.hasMany(Users);
Users.belongsTo(Roles);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Users = Users;
db.Roles = Roles;
db.Points = require("../model/points")(sequelize, Sequelize);
db.TopographicBooklet = require("../model/topographicBooklet")(sequelize, Sequelize);
db.TypeOfTopographicSurvey = require("../model/typeOfTopographicSurvey")(sequelize, Sequelize);

module.exports = db;
