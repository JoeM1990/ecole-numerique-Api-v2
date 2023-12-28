const { authJwt } = require("../middleware");
const controller = require("../controller/enseignant.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/enseignant", authJwt.verifyToken, controller.create);

  app.get("/api/enseignant", controller.findAll);
  

  app.get("/api/enseignant/:id", authJwt.verifyToken, controller.findOne);

  app.put("/api/enseignant/:id", authJwt.verifyToken, controller.update);

  app.delete("/api/enseignant/:id", authJwt.verifyToken, controller.deleteByid);
  
};