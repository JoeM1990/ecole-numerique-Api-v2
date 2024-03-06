const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.enseignant = require("../models/enseignant.model.js")(sequelize, Sequelize);
db.eleve = require("../models/eleve.model.js")(sequelize, Sequelize);
db.personnel = require("../models/personnel.model.js")(sequelize, Sequelize);
db.presence = require("../models/presence.model.js")(sequelize, Sequelize);
db.finance = require("../models/finance.model.js")(sequelize, Sequelize);



module.exports = db;