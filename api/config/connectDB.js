require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
  }
);

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
db.TopographicBooklet = require("../model/topographicBooklet")(
  sequelize,
  Sequelize
);
db.TypeOfTopographicSurvey = require("../model/typeOfTopographicSurvey")(
  sequelize,
  Sequelize
);

module.exports = db;
