var express = require("express");
var router = express.Router();
var StudentControl = require("../controller/studentController");

router.post("/addStudent", StudentControl.addStudent);
router.put("/addBulkStudent", StudentControl.addBulkStudent);
router.get("/displayAllStudent", StudentControl.showAllStudent);
router.get("/displayStudentById/:id", StudentControl.showStudentById);
router.delete("/deleteStudentById/:id", StudentControl.deleteStudentById);
router.delete("deleteAllStudents", StudentControl.deleteAllStudents);
router.put("/updateStudentById/:id", StudentControl.updateStudentById);

module.exports = router;
