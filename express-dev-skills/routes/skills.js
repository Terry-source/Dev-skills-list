// routes/skills.js

var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.newOne);
router.get("/:id", skillsCtrl.getSkillById, skillsCtrl.getOne);
router.put("/update/:id", skillsCtrl.getSkillById, skillsCtrl.showUpdateScreen);
router.put("/:id", skillsCtrl.getSkillById, skillsCtrl.update);

router.post("/", skillsCtrl.create);
router.delete("/:id/", skillsCtrl.deleteOne);

module.exports = router;
