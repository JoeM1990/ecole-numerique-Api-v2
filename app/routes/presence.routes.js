const { authJwt } = require("../middleware");
const controller = require("../controller/presence.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/presence", authJwt.verifyToken, controller.create);

  app.get("/api/presence", authJwt.verifyToken, controller.findAll);
  
  app.get("/api/presence/:id", authJwt.verifyToken, controller.findOne);

  app.get("/api/presence/:categorie", authJwt.verifyToken, controller.findByName);

  app.put("/api/presence/:id", authJwt.verifyToken, controller.update);

  app.delete("/api/presence/:id", authJwt.verifyToken, controller.deleteByid);
  
};