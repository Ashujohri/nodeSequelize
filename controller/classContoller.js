var Class = require("../models/classModels");

const addClass = async (req, res) => {
  try {
    let body = {
      class_name: req.body.class_name,
      class_teacher: req.body.class_teacher,
      class_student_strength: req.body.class_student_strength,
      class_schoolId: req.body.class_schoolId,
    };
    let result = await Class.create(body);
    if (!result) {
      console.log("error in add class", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const classBulkAdd = async (req, res) => {
  try {
    let body = [];
    req.body.map((item) => {
      let tempBody = {
        class_name: item.class_name,
        class_teacher: item.class_teacher,
        class_student_strength: item.class_student_strength,
        class_schoolId: item.class_schoolId,
      };
      body.push(tempBody);
    });
    let result = await Class.bulkCreate(body);
    if (!result) {
      console.log("error in class bulk add", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const showAllClasses = async (req, res) => {
  try {
    let result = await Class.findAll({ order: [["id", "desc"]] });
    if (!result) {
      console.log("error in display all classes", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const showClassesById = async (req, res) => {
  try {
    let result = await Class.findByPk(req.params.id);
    if (!result) {
      console.log("error in show class by Id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const deleteAllClasses = async (req, res) => {
  try {
    let result = await Class.destroy({ truncate: true });
    if (!result) {
      console.log("error in delete all classes", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const deleteClassesById = async (req, res) => {
  try {
    let result = await Class.destroy({ where: { id: req.params.id } });
    if (!result) {
      console.log("error in delete classes by id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const updateClassesById = async (req, res) => {
  try {
    let body = {
      class_name: req.body.class_name,
      class_teacher: req.body.class_teacher,
      class_student_strength: req.body.class_student_strength,
      class_schoolId: req.body.class_schoolId,
    };
    let result = await Class.update(body, { where: { id: req.params.id } });
    if (!result) {
      console.log("error in update class By Id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

module.exports = {
  addClass,
  classBulkAdd,
  showAllClasses,
  showClassesById,
  deleteAllClasses,
  deleteClassesById,
  updateClassesById
};
