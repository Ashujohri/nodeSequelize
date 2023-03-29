const { DataTypes } = require("sequelize");
const sequelize = require("../dbconfig/pool");

const Class = sequelize.define("class", {
  class_name: { type: DataTypes.STRING, allowNull: false },
  class_teacher: { type: DataTypes.INTEGER, allowNull: false },
  class_student_strength: { type: DataTypes.STRING, allowNull: true },
  class_schoolId: { type: DataTypes.INTEGER, allowNull: false },
});

sequelize.sync({ alter: true });

module.exports = Class;
