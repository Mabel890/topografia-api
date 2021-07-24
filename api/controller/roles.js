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

const updateRoles = async(req, res) => {
  try {
      const nombre = req.body.name;
      const id = req.params.id;

      const role = await db.Roles.findOne({where:{
      id: id
      }})
  
      role.name=nombre;
      await rol.save()
      res.json(role)
  } catch (error) {
      console.log(error)
  }
}

const deleteRole = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await db.Roles.findOne({
      where: {
        id: id,
      },
    });
    await role.destroy();
    res.json({message: "The role has been errased"});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerRole,
  getRoles,
  updateRoles,
  deleteRole,
};
