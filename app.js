const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./models");
const Role = db.role;

db.sequelize.sync().then(() => {
  console.log('Resync Db');
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to api" });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/enseignant.routes')(app);
require('./routes/eleve.routes')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});