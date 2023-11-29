const { authJwt } = require("../middleware");
const controller = require("../controller/personnel.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/personnel", authJwt.verifyToken, controller.create);

  app.get("/api/personnel", authJwt.verifyToken, controller.findAll);

  app.get("/api/personnel/:id", authJwt.verifyToken, controller.findOne);

  app.put("/api/personnel/:id", authJwt.verifyToken, controller.update);

  app.delete("/api/personnel/:id", authJwt.verifyToken, controller.deleteByid);
  
};