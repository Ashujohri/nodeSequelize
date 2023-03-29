var express = require("express");
var router = express.Router();
var Teacher = require("../controller/teacherController");

router.post("/addTeacher", Teacher.addTeacher);
router.put("/teacherBulkAdd", Teacher.addBulkTeacher);
router.get("/showAllTeachers", Teacher.showAllTeachers);
router.get("/showTeacherById/:id", Teacher.showTeacherById);
router.delete("deleteAllTeachers", Teacher.deleteAllTeachers);
router.delete("deleteTeacherId/:id", Teacher.deleteTeacherById);
router.put("/updateTeacherDetails/:id", Teacher.updateTeacherById);

module.exports = router;
