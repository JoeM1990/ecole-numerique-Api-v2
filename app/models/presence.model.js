module.exports = (sequelize, Sequelize) => {
    const Personnel = sequelize.define("presences", {
      noms: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      heureA: {
        type: Sequelize.STRING
      },
      heureS: {
        type: Sequelize.STRING
      },
      categorie: {
        type: Sequelize.STRING
      }
    });
  
    return Personnel;
  };