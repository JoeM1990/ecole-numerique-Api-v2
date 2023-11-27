require('dotenv').config();
const db = require("../models");
const config = require("../config/auth.config.js");
const User = db.user;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    status: req.body.status,
  })
    .then(user => {
        res.send({ message: "User was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id },
                                config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: '1h', 
                              });

    //   const refreshToken=jwt.sign({ id: user.id },
    //                             config.secret,
    //                             {
    //                             algorithm: 'HS256',
    //                             allowInsecureKeySizes: true,
    //                             expiresIn: '1d', 
    //                             });

        res.status(200).send({
                    id: user.id,
                    username: user.username,
                    status: user.status,
                    accessToken: token
                });
        
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};