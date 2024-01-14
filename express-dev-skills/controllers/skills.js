const skillsDB = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
        skills: skillsDB.getAll(),
        heading: "All Skills",
    });
}

function getSkillById(req, res, next) {
    const skillId = parseInt(req.params.id);
    const skill = skillsDB.getOne(skillId);

    if (!skill) {
        return res.status(404).render('error', {
            message: 'No skill found',
        });
    }

    req.skill = skill;

    next();
}

function newOne(req, res) {
    res.render('skills/new', {
        heading: "New Skill",
    });
}

function create(req, res) {
    skillsDB.create(req.body);

    res.redirect('/skills');
}

function getOne(req, res) {
    res.render('skills/getOne', {
        skill: req.skill,
        heading: req.skill.name,
    });
}

function update(req, res) {
    req.skill.name = req.body.name;
    req.skill.learnt = req.body.learnt;

    res.redirect(`/skills/${req.skillId}`);
}

function deleteOne(req, res) {
    skillsDB.deleteOne(req.params.id);
    res.redirect('/skills');
}

module.exports = {
    index,
    getOne,
    getSkillById,
    update,
    deleteOne,
    newOne,
    create,
}