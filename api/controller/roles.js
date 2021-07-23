const db = require("../config/connectDB");

const registerRole = async (req, res) => {
  try {
    const roles = {
      name: req.body.name,
    };
    console.log(roles);
    const rol = await db.Roles.create(roles);
    res.json(rol);
  } catch (error) {
    console.log(error);
  }
};

const getRoles = async (req, res) => {
  try {
    db.Roles.findAll().then((data) => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerRole,
  getRoles,
};