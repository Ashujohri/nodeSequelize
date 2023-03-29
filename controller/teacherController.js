var Teacher = require("../models/teacherModels");

const addTeacher = async (req, res) => {
  try {
    let body = {
      teacher_firstname: req.body.teacher_firstname,
      teacher_lastname: req.body.teacher_lastname,
      teacher_address: req.body.teacher_address,
      teacher_mobile: req.body.teacher_mobile,
      teacher_email: req.body.teacher_email,
      teacher_primary_subject: req.body.teacher_primary_subject,
      teacher_primary_class: req.body.teacher_primary_class,
      teacher_qualification: req.body.teacher_qualification,
      teacher_schoolId: req.body.teacher_schoolId,
      teacher_salary: req.body.teacher_salary,
      teacher_join_date: req.body.teacher_join_date,
      teacher_exist_date: req.body.teacher_exist_date,
    };
    let result = await Teacher.create(body);
    if (!result) {
      console.log("Error in add teacher", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const addBulkTeacher = async (req, res) => {
  try {
    let body = [];
    req.body.map((item) => {
      let tempBody = {
        teacher_firstname: item.teacher_firstname,
        teacher_lastname: item.teacher_lastname,
        teacher_address: item.teacher_address,
        teacher_mobile: item.teacher_mobile,
        teacher_email: item.teacher_email,
        teacher_primary_subject: item.teacher_primary_subject,
        teacher_primary_class: item.teacher_primary_class,
        teacher_qualification: item.teacher_qualification,
        teacher_schoolId: item.teacher_schoolId,
        teacher_salary: item.teacher_salary,
        teacher_join_date: item.teacher_join_date,
        teacher_exist_date: item.teacher_exist_date,
      };
      body.push(tempBody);
    });
    let result = await Teacher.bulkCreate(body);
    if (!result) {
      console.log("Error in add bulk teacher", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const showAllTeachers = async (req, res) => {
  try {
    let result = await Teacher.findAll({ order: [["id", "desc"]] });
    if (!result) {
      console.log("Error in show All teacher", result);
      return res.status(400).json({ status: false, message: error });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const showTeacherById = async (req, res) => {
  try {
    let result = await Teacher.findByPk(req.params.id);
    if (!result) {
      console.log("error in teacher find by id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const deleteTeacherById = async (req, res) => {
  try {
    let result = await Teacher.destroy({ where: { id: req.params.id } });
    if (!result) {
      console.log("error in teacher delete by Id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      if (result !== 0) {
        return res.status(200).json({ status: true, data: result });
      } else {
        return res
          .status(404)
          .json({ status: true, message: "Record not found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const deleteAllTeachers = async (req, res) => {
  try {
    let result = await Teacher.destroy({ truncate: true });
    if (!result) {
      console.log("error in deleteAll teachers", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const updateTeacherById = async (req, res) => {
  try {
    let body = {
      teacher_firstname: req.body.teacher_firstname,
      teacher_lastname: req.body.teacher_lastname,
      teacher_address: req.body.teacher_address,
      teacher_mobile: req.body.teacher_mobile,
      teacher_email: req.body.teacher_email,
      teacher_primary_subject: req.body.teacher_primary_subject,
      teacher_primary_class: req.body.teacher_primary_class,
      teacher_qualification: req.body.teacher_qualification,
      teacher_schoolId: req.body.teacher_schoolId,
      teacher_salary: req.body.teacher_salary,
      teacher_join_date: req.body.teacher_join_date,
      teacher_exist_date: req.body.teacher_exist_date,
    };
    let result = await Teacher.update(body, { where: { id: req.params.id } });
    if (!result) {
      console.log("error in update teacher", error);
      return res.status(400).json({ status: false, message: result });
    } else {
      if (result !== 0) {
        return res.status(200).json({ status: true, data: result });
      } else {
        return res
          .status(404)
          .json({ status: true, message: "Record not found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

module.exports = {
  addTeacher,
  addBulkTeacher,
  showAllTeachers,
  showTeacherById,
  deleteTeacherById,
  deleteAllTeachers,
  updateTeacherById,
};
