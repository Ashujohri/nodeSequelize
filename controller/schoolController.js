var School = require("../models/schoolModels");

const addSchool = async (req, res) => {
  try {
    let body = {
      school_name: req.body.school_name,
      school_address: req.body.school_address,
      school_principal: req.body.school_principal,
      school_phone: req.body.school_phone,
      school_email: req.body.school_email,
      school_class_number: req.body.school_class_number,
    };
    let result = await School.create(body);
    if (!result) {
      console.log("error in school controller", error);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const addBulkAdd = async (req, res) => {
  try {
    let body = [];
    req.body.map((item) => {
      let tempBody = {
        school_name: item.school_name,
        school_address: item.school_address,
        school_principal: item.school_principal,
        school_phone: item.school_phone,
        school_email: item.school_email,
        school_class_number: item.school_class_number,
      };
      body.push(tempBody);
    });
    let result = await School.bulkCreate(body);
    if (!result) {
      console.log("error in school Controller bulk Add", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const getAllSchool = async (req, res) => {
  try {
    let result = await School.findAll({ order: [["id", "desc"]] });
    if (!result) {
      console.log("error in school Controller get all schools", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const getSchoolsById = async (req, res) => {
  try {
    let result = await School.findByPk(req.params.id);
    if (!result) {
      console.log("error in get school by id", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

module.exports = { addSchool, addBulkAdd, getAllSchool, getSchoolsById };
