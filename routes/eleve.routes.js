const { authJwt } = require("../middleware");
const controller = require("../controller/eleve.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/eleve", authJwt.verifyToken, controller.create);

  app.get("/api/eleve", authJwt.verifyToken, controller.findAll);

  app.get("/api/eleve/:id", authJwt.verifyToken, controller.findOne);

  app.put("/api/eleve/:id", authJwt.verifyToken, controller.update);

  app.delete("/api/eleve/:id", authJwt.verifyToken, controller.deleteByid);
  
};