var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.newOne);
router.put("/:id", skillsCtrl.getSkillById, skillsCtrl.updateExisting);

router.get("/:id", skillsCtrl.getSkillById, skillsCtrl.getOne);
router.post("/", skillsCtrl.create);
router.delete("/:id/", skillsCtrl.deleteOne);

module.exports = router;
