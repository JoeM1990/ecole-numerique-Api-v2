const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {

  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Échoué! Nom d'utilisateur est déjà utilisé!"
      });
      return;
    }

   
    // User.findOne({
    //   where: {
    //     email: req.body.email
    //   }
    // }).then(user => {
    //   if (user) {
    //     res.status(400).send({
    //       message: "Failed! Email is already in use!"
    //     });
    //     return;
    //   }

    //   next();
    // });

    next();

  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Échoué! Le rôle n'existe pas = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
