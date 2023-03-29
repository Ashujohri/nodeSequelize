var express = require("express");
var router = express.Router();
var adminControl = require("../controller/adminController");

router.post("/addAdmin", adminControl.addAdmin);
router.get("/allAdmins", adminControl.getAllAdmin);
router.get("/displayAdminId/:id", adminControl.getAdminById);

module.exports = router;
