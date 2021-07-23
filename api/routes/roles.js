module.exports = (app) => {
  const roles = require("../controller/roles");
  var router = require("express").Router();

  router.post("/roles", roles.registerRole);
  router.get("/listRoles", roles.getRoles)
  app.use("/api/users", router);
}