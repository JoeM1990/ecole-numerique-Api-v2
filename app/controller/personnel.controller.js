const db = require("../models");
const Personnel = db.personnel;


exports.create = (req, res) => {
    
    Personnel.create(req.body)
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
    
    Personnel.findAll()
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
  
    Personnel.update(req.body, {
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
  
    Personnel.findByPk(id)
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
  
    Personnel.destroy({
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
