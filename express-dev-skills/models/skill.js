const devSkillsDB = [
    { "id": 1, "name": "JavaScript", "learnt": true },
    { "id": 2, "name": "HTML", "learnt": true },
    { "id": 3, "name": "CSS", "learnt": true },
    { "id": 4, "name": "React", "learnt": false },
    { "id": 5, "name": "Node.js", "learnt": false },
    { "id": 6, "name": "Python", "learnt": true },
    { "id": 7, "name": "Java", "learnt": false },
    { "id": 8, "name": "Git", "learnt": true },
    { "id": 9, "name": "SQL", "learnt": false },
    { "id": 10, "name": "Docker", "learnt": true },
];

function getAll(req, res) {
    // res.json(devSkillsDB);
    return devSkillsDB;
}

function getOne(skillId) {
    // Use Array.find to get the skill with the matching id
    const skill = devSkillsDB.find(skill => skill.id === skillId);

    // Check if the skill exists before trying to access its properties
    if (!skill) {
        return null; // or handle the error in an appropriate way
    }

    return skill;
}

function create(newSkill) {
    // const newSkill = req.body;
    newSkill.id = devSkillsDB[devSkillsDB.length - 1].id + 1;
    newSkill.learnt = false;
    devSkillsDB.push(newSkill);
    // res.json(newSkill);
}

function update(req, res) {
    const skill = devSkillsDB.find(skill => skill.id === parseInt(req.params.id));
    skill.name = req.body.name;
    skill.learnt = req.body.learnt;
    res.json(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const index = devSkillsDB.findIndex(skill => skill.id === parseInt(req.params.id));
    devSkillsDB.splice(index, 1);
}

function updateLearnt(req, res) {
    const skill = devSkillsDB.find(skill => skill.id === parseInt(req.params.id));
    skill.learnt = req.body.learnt;
    res.json(skill);
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
    updateLearnt,
};
