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
    email: req.body.email,
    role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 8),
    status: req.body.status,
  })
    .then(user => {
        res.status(201).send({ message: "User was registered successfully!" });
    })
    .catch(err => {
       res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
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
                    username: user.username,
                    status: user.status,
                    accessToken: token
                });
        // res.cookie('authentication',token, {
        //      maxAge: 2 * 60 * 60 * 60,
        //       httpOnly: true
        //       })
        
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};