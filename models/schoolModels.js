const { DataTypes } = require("sequelize");
const sequelize = require("../dbconfig/pool");

const School = sequelize.define("school", {
  school_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Name already existed",
    },
  },
  school_address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  school_principal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  school_phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Number already in use",
    },
  },
  school_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email already is use",
    },
  },
  school_class_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ alter: true });

module.exports = School;
