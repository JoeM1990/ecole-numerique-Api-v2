module.exports = (sequelize, Sequelize) => {
    const Enseignant = sequelize.define("enseignants", {
      nom: {
        type: Sequelize.STRING
      },
      postnom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      lieu: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      etat: {
        type: Sequelize.STRING
      },
      sexe: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      
    });
  
    return Enseignant;
  };