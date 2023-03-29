var express = require("express");
var router = express.Router();
var ClassControl = require("../controller/classContoller");

router.post("/addClass", ClassControl.addClass);
router.put("/addClassBulk", ClassControl.classBulkAdd);
router.get("/displayAllClasses", ClassControl.showAllClasses);
router.get("/displayClassessById/:id", ClassControl.showClassesById);
router.delete("/deleteAllClasses", ClassControl.deleteAllClasses);
router.delete("/deleteClassesById/:id", ClassControl.deleteClassesById);
router.put("/updateClasses/:id", ClassControl.updateClassesById);

module.exports = router;
