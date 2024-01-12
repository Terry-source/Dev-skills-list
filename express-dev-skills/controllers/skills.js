const skillsDB = require('../models/skills');

function index(req, res) {
    res.render('skills/index', {
        skills: skillsDB.getAll(),
        heading: "All Skills",
    });
}

module.exports = {
    index,
}