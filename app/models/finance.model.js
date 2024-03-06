module.exports = (sequelize, Sequelize) => {
    const Personnel = sequelize.define("finances", {
      noms: {
        type: Sequelize.STRING
      },
      montant: {
        type: Sequelize.STRING
      },
      motif: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      categorie: {
        type: Sequelize.STRING
      }
    });
  
    return Personnel;
  };