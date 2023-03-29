const { DataTypes } = require("sequelize");
const sequelize = require("../dbconfig/pool");

const Principal = sequelize.define("principal", {
  principal_FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  principal_LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  principal_Address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  schoolId: {
    type: DataTypes.INTEGER,
  },
  principal_mobile_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  principal_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  highest_qualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  picture: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ alter: true });

module.exports = Principal;
