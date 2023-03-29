var Principal = require("../models/principalModels");
var bcrypt = require("bcrypt");

const addPrincipal = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let body = {
      principal_FirstName: req.body.principal_FirstName,
      principal_LastName: req.body.principal_LastName,
      principal_Address: req.body.principal_Address,
      schoolId: req.body.schoolId,
      principal_mobile_no: req.body.principal_mobile_no,
      principal_email: req.body.principal_email,
      gender: req.body.gender,
      highest_qualification: req.body.highest_qualification,
      picture: req.files[0].filename,
      password: hashedPassword,
    };
    let result = await Principal.create(body);
    if (!result) {
      console.log("error in Principal Controller", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const bulkAddPrincipal = async (req, res) => {
  try {
    let body = [];
    req.body.map((item) => {
      const tempBody = {
        principal_FirstName: item.principal_FirstName,
        principal_LastName: item.principal_LastName,
        principal_Address: item.principal_Address,
        schoolId: item.schoolId,
        principal_mobile_no: item.principal_mobile_no,
        principal_email: item.principal_email,
        gender: item.gender,
        highest_qualification: item.highest_qualification,
        picture: item.picture,
        password: item.password,
      };
      body.push(tempBody);
    });
    console.log("body in bulk add", body);
    let result = await Principal.bulkCreate(body);
    if (!result) {
      console.log("error in Principal Controller", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const getAllPrincipal = async (req, res) => {
  try {
    let result = await Principal.findAll({ order: [["id", "desc"]] });
    if (!result) {
      console.log("error in getAll Principal", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const getAllPrincipalById = async (req, res) => {
  try {
    let result = await Principal.findByPk(req.params.id);
    if (!result) {
      console.log("error in getAll Principal", result);
      return res.status(400).json({ status: false, message: result });
    } else {
      return res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const getPrincipalLogin = async (req, res) => {
  try {
    const result = await Principal.findOne({
      where: {
        principal_email: req.body.principal_email,
      },
    });
    if (result !== null) {
      if (await bcrypt.compare(req.body.password, result.dataValues.password)) {
        let { password, ...restData } = result.dataValues;
        return res.status(200).json({ status: true, data: restData });
      } else {
        return res
          .status(200)
          .json({ status: false, message: "Invalid password" });
      }
    } else {
      return res
        .status(200)
        .json({ status: false, message: "Email not found" });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

module.exports = {
  addPrincipal,
  bulkAddPrincipal,
  getAllPrincipal,
  getAllPrincipalById,
  getPrincipalLogin,
};
