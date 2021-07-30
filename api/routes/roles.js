module.exports = (app) => {
  const roles = require("../controller/roles");
  var router = require("express").Router();

  router.post("/registerRole", roles.registerRole);
  router.get("/listRoles", roles.getRoles);
  router.put("/updateRoles/:id", roles.updateRoles);
  router.delete("/deleteRole/:id", roles.deleteRole);
  router.get("/listRole/:id", roles.listRole);
  app.use("/api/roles", router);
};
