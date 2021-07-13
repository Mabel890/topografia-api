const { response } = require("express");
const db = require("../config/connectDB");

exports.registerUser = async (req, res) => {
  try {
    const users = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      id_role: req.body.id_role,
    };

    const user = await db.Users.create(users);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
