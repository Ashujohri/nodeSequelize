const { DataTypes, STRING } = require("sequelize");
const sequelize = require("../dbconfig/pool");

const Student = sequelize.define("student", {
  student_firstname: { type: DataTypes.STRING, allowNull: false },
  student_middlename: { type: DataTypes.STRING, allowNull: true },
  student_lastname: { type: DataTypes.STRING, allowNull: true },
  student_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: { args: true, msg: "Valid email-id required" } },
    unique: { args: true, msg: "Email address already in use" },
  },
  student_class: { type: DataTypes.INTEGER, allowNull: false },
  student_phone_number: { type: DataTypes.STRING, allowNull: false },
  student_schoolId: { type: DataTypes.INTEGER, allowNull: false },
  student_roll_number: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: { args: true, msg: "roll number should be unique" },
  },
  student_admission_date: { type: DataTypes.DATEONLY, allowNull: false },
  student_father_name: { type: DataTypes.STRING, allowNull: false },
  student_mother_name: { type: DataTypes.STRING, allowNull: false },
  student_address: { type: DataTypes.TEXT, allowNull: false },
  student_city: { type: DataTypes.STRING, allowNull: false },
  student_state: { type: DataTypes.STRING, allowNull: false },
  student_fees: { type: DataTypes.STRING, allowNull: true },
  student_fees_status: { type: DataTypes.STRING, allowNull: false },
  student_course_type: { type: DataTypes.STRING, allowNull: false },
  student_picture: { type: DataTypes.TEXT, allowNull: true },
});

sequelize.sync({ alter: true });

module.exports = Student;
