const db = require("../models");
const User = db.user;



exports.findAll = (req, res) => {
    
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Pas d'informations"
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Modification effectuée"
          });
        } else {
          res.send({
            message: `Pas d'informations dans votre requête`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur"
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Pas d'informations dans votre requête`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur" 
        });
      });
  };

  exports.deleteByid = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Suppression effectuée"
          });
        } else {
          res.send({
            message: `Pas d'informations dans votre requête`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur"
        });
      });
  };
