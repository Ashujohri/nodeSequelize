var express = require("express");
var router = express.Router();
var schoolControl = require("../controller/schoolController");

router.post("/addSchool", schoolControl.addSchool);
router.put("/bulkAddSchool", schoolControl.addBulkAdd);
router.get("/getAllSchools", schoolControl.getAllSchool);
router.get("/getAllSchools/:id", schoolControl.getAllSchool);

module.exports = router;
