var Admin = require("../models/adminModels");

const addAdmin = async (req, res) => {
  try {
    console.log("req.body", req.body);
    let postData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    };
    let result = await Admin.create(postData);
    if (!result) {
      console.log("error in post submt data", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const getAllAdmin = async (req, res) => {
  try {
    let result = await Admin.findAll({ order: [["id", "DESC"]] });
    if (!result) {
      console.log("error in fetchAll Admin", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const getAdminById = async (req, res) => {
  try {
    let result = await Admin.findByPk(req.params.id);
    if (!result) {
      console.log("error in fetchById Admin", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

module.exports = { addAdmin, getAllAdmin, getAdminById };
