const { authJwt } = require("../middleware");
const controller = require("../controller/finance.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/finance", authJwt.verifyToken, controller.create);

  app.get("/api/finance", authJwt.verifyToken, controller.findAll);
  
  app.get("/api/finance/:id", authJwt.verifyToken, controller.findOne);

  app.get("/api/finance/:categorie", authJwt.verifyToken, controller.findByName);

  app.put("/api/finance/:id", authJwt.verifyToken, controller.update);

  app.delete("/api/finance/:id", authJwt.verifyToken, controller.deleteByid);
  
};