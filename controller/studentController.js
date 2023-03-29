const Student = require("../models/studentModels");

const addStudent = async (req, res) => {
  try {
    let body = {
      student_firstname: req.body.student_firstname,
      student_middlename: req.body.student_middlename,
      student_lastname: req.body.student_lastname,
      student_email: req.body.student_email,
      student_class: req.body.student_class,
      student_phone_number: req.body.student_phone_number,
      student_schoolId: req.body.student_schoolId,
      student_roll_number: req.body.student_roll_number,
      student_admission_date: req.body.student_admission_date,
      student_father_name: req.body.student_father_name,
      student_mother_name: req.body.student_mother_name,
      student_address: req.body.student_address,
      student_city: req.body.student_city,
      student_state: req.body.student_state,
      student_fees: req.body.student_fees,
      student_fees_status: req.body.student_fees_status,
      student_course_type: req.body.student_course_type,
      student_picture: req.body.student_picture,
    };
    let result = await Student.create(body);
    if (!result) {
      console.log("error in student add", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const addBulkStudent = async (req, res) => {
  try {
    let body = [];
    req.body.map((item) => {
      let tempBody = {
        student_firstname: item.student_firstname,
        student_middlename: item.student_middlename,
        student_lastname: item.student_lastname,
        student_email: item.student_email,
        student_class: item.student_class,
        student_phone_number: item.student_phone_number,
        student_schoolId: item.student_schoolId,
        student_roll_number: item.student_roll_number,
        student_admission_date: item.student_admission_date,
        student_father_name: item.student_father_name,
        student_mother_name: item.student_mother_name,
        student_address: item.student_address,
        student_city: item.student_city,
        student_state: item.student_state,
        student_fees: item.student_fees,
        student_fees_status: item.student_fees_status,
        student_course_type: item.student_course_type,
        student_picture: item.student_picture,
      };
      body.push(tempBody);
    });
    let result = await Student.bulkCreate(body);
    if (!result) {
      console.log("error in student bulk add", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const showAllStudent = async (req, res) => {
  try {
    let result = await Student.findAll({ order: [["id", "desc"]] });
    if (!result) {
      console.log("error in student displayAll", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const showStudentById = async (req, res) => {
  try {
    let result = await Student.findByPk(req.params.id);
    if (!result) {
      console.log("error in student display by Id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    let result = await Student.destroy({ where: { id: req.params.id } });
    if (!result) {
      console.log("error in student delete by Id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const deleteAllStudents = async (req, res) => {
  try {
    let result = await Student.destroy({ truncate: true });
    if (!result) {
      console.log("error in delete All student", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const updateStudentById = async (req, res) => {
  try {
    let body = {
      student_firstname: req.body.student_firstname,
      student_middlename: req.body.student_middlename,
      student_lastname: req.body.student_lastname,
      student_email: req.body.student_email,
      student_class: req.body.student_class,
      student_phone_number: req.body.student_phone_number,
      student_schoolId: req.body.student_schoolId,
      student_roll_number: req.body.student_roll_number,
      student_admission_date: req.body.student_admission_date,
      student_father_name: req.body.student_father_name,
      student_mother_name: req.body.student_mother_name,
      student_address: req.body.student_address,
      student_city: req.body.student_city,
      student_state: req.body.student_state,
      student_fees: req.body.student_fees,
      student_fees_status: req.body.student_fees_status,
      student_course_type: req.body.student_course_type,
      student_picture: req.body.student_picture,
    };
    let result = await Student.update(body, { where: { id: req.params.id } });
    if (!result) {
      console.log("error in update student by Id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

module.exports = {
  addStudent,
  addBulkStudent,
  showAllStudent,
  showStudentById,
  deleteStudentById,
  deleteAllStudents,
  updateStudentById,
};
