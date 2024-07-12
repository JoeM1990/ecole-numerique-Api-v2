const db = require("../models");
const Finance = db.finance;


exports.create = (req, res) => {
    
    Finance.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message
        });
      });
  };

exports.findAll = (req, res) => {
    
    Finance.findAll()
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
  
    Finance.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Modification effectuée"
          });
        } else {
          res.send({
            message: `Pas d'informations dans votre requette`
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
  
    Finance.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Pas d'informations dans votre requette`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur" 
        });
      });
  };

exports.findByName = (req, res) => {

    Finance.findOne({
        where: {
          categorie: req.params.categorie
        }
      })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Pas d'informations dans votre requette`
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
  
    Finance.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Suppression effectuée"
          });
        } else {
          res.send({
            message: `Pas d'informations dans votre requette`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur"
        });
      });
  };
