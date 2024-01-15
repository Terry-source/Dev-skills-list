// models/skill.js

const devSkillsDB = [
  {
    id: 1,
    name: "JavaScript",
    status: "Proficient",
    resources: [
      {
        name: "MDN Web Docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
    deadline: "2025-12-31",
  },
  {
    id: 2,
    name: "HTML",
    status: "Proficient",
    resources: [
      {
        name: "W3Schools",
        link: "https://www.w3schools.com/html/",
      },
    ],
    deadline: "2025-12-31",
  },
  {
    id: 3,
    name: "CSS",
    status: "Intermediate",
    resources: [
      {
        name: "CSS Tricks",
        link: "https://css-tricks.com/",
      },
    ],
    deadline: "2026-06-30",
  },
  {
    id: 4,
    name: "React",
    status: "Beginner",
    resources: [
      {
        name: "React documentation",
        link: "https://reactjs.org/docs/getting-started.html",
      },
    ],
    deadline: "2027-12-31",
  },
  {
    id: 5,
    name: "Node.js",
    status: "Intermediate",
    resources: [
      {
        name: "Node.js documentation",
        link: "https://nodejs.org/en/docs/",
      },
    ],
    deadline: "2026-12-31",
  },
  {
    id: 6,
    name: "Python",
    status: "Proficient",
    resources: [
      {
        name: "Python documentation",
        link: "https://docs.python.org/3/",
      },
    ],
    deadline: "2025-12-31",
  },
  {
    id: 7,
    name: "Java",
    status: "Beginner",
    resources: [
      {
        name: "Java documentation",
        link: "https://docs.oracle.com/en/java/",
      },
    ],
    deadline: "2027-06-30",
  },
  {
    id: 8,
    name: "Git",
    status: "Proficient",
    resources: [
      {
        name: "Git documentation",
        link: "https://git-scm.com/doc",
      },
    ],
    deadline: "2025-12-31",
  },
  {
    id: 9,
    name: "SQL",
    status: "Intermediate",
    resources: [
      {
        name: "SQL Tutorial",
        link: "https://www.sqltutorial.org/",
      },
    ],
    deadline: "2026-12-31",
  },
  {
    id: 10,
    name: "Docker",
    status: "Intermediate",
    resources: [
      {
        name: "Docker documentation",
        link: "https://docs.docker.com/",
      },
    ],
    deadline: "2026-06-30",
  },
];

function getAll(req, res) {
  // res.json(devSkillsDB);
  return devSkillsDB;
}

function getOne(skillId) {
  // Use Array.find to get the skill with the matching id
  const skill = devSkillsDB.find((skill) => skill.id === skillId);

  // Check if the skill exists before trying to access its properties
  if (!skill) {
    return null; // or handle the error in an appropriate way
  }

  return skill;
}

function create(newSkill) {
  // const newSkill = req.body;
  newSkill.id = devSkillsDB[devSkillsDB.length - 1].id + 1;
  newSkill.status = "Beginner";
  devSkillsDB.push(newSkill);
  // res.json(newSkill);
}

function update(req, res) {
  const skill = devSkillsDB.find(
    (skill) => skill.id === parseInt(req.params.id)
  );
  skill.name = req.body.name;
  skill.status = req.body.status;
  res.json(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const index = devSkillsDB.findIndex(
    (skill) => skill.id === parseInt(req.params.id)
  );
  devSkillsDB.splice(index, 1);
}

function updateLearnt(req, res) {
  const skill = devSkillsDB.find(
    (skill) => skill.id === parseInt(req.params.id)
  );
  skill.status = req.body.status;
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
