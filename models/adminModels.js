const { DataTypes } = require("sequelize");
const sequelize = require("../dbconfig/pool");

const Admin = sequelize.define(
  "Admin",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Valid email-id required",
        },
      },
      allowNull: false,
      unique: {
        args: true,
        msg: "Email address already in use",
      },
    },
    mobile: {
      type: DataTypes.STRING,
      unique: { args: true, msg: "Mobile number should be unique" },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// sequelize.sync({ force: false });

module.exports = Admin;
