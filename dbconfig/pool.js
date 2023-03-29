const { Sequelize } = require("sequelize");
var dotenv = require("dotenv");
dotenv.config();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  `${process.env.DATABASE}`,
  `${process.env.USER}`,
  `${process.env.PASSWORD}`,
  {
    host: `${process.env.HOST}`,
    dialect: "mysql",
    logging: false,
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
