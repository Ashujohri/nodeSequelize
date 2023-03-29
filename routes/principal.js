var express = require("express");
var router = express.Router();
var multer = require("../dbconfig/multer");
var principalControl = require("../controller/principalController");

router.post("/addPrincipal", multer.any(), principalControl.addPrincipal);
router.put("/bulkAdd", principalControl.bulkAddPrincipal);
router.get("/getAllPrincipal", principalControl.getAllPrincipal);
router.get("/getPrincipalById/:id", principalControl.getAllPrincipalById);
router.post("/loginByPrincipal", principalControl.getPrincipalLogin);

module.exports = router;
