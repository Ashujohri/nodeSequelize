const { DataTypes } = require("sequelize");
const sequelize = require("../dbconfig/pool");

const Teacher = sequelize.define("teacher", {
  teacher_firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher_address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  teacher_mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "mobile number already exists",
    },
  },
  teacher_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: "Email address already in use",
      },
    },
  },
  teacher_primary_subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher_primary_class: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher_qualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher_schoolId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teacher_salary: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  teacher_join_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  teacher_exist_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

sequelize.sync({ alter: true });

module.exports = Teacher;
