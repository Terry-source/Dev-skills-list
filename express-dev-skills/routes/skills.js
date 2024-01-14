var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newOne);
router.get('/:id', skillsCtrl.getSkillById, skillsCtrl.getOne);
router.post('/', skillsCtrl.create);
router.put('/:id', skillsCtrl.getSkillById, skillsCtrl.update);
router.delete('/:id', skillsCtrl.getSkillById, skillsCtrl.deleteOne);

module.exports = router;
