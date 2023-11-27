module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("eleves", {
      nom: {
        type: Sequelize.STRING
      },
      postnom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      nom_tuteur: {
        type: Sequelize.STRING
      },
      lieu: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      sexe: {
        type: Sequelize.STRING
      },
      classe: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      annee: {
        type: Sequelize.STRING
      },
      
    });
  
    return User;
  };