const db = require("../config/connectDB");
const UserModel = require("../model/users");

module.exports = {
  registerUser: async function (req, res) {
    try {
      const users = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roleId: req.body.id_role,
      };

      const user = await db.Users.create(users);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  login: async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const UserDatabase = await db.Users.findOne({
      where: {
        email: email,
      },
    });
    console.log("El arreglo", !UserDatabase);
    if (!UserDatabase) {
      res.status(404).json({ message: "no se encontro el usuario" });
    }

    if (password === UserDatabase.password) {
      console.log(UserDatabase);
      res.json(UserDatabase);
    } else {
      res
        .status(404)
        .json({ message: "no se ha encontrado usuario y/o contraseña" });
    }
  },
};
