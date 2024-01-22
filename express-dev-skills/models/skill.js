// models/skill.js

const devSkillsDB = [
  {
    id: 1,
    name: "Commonwealth Bank of Australia",
    issuerType: "Bank",
    creditRating: "AA-",
    keyStrengths: [
      "Strong financial performance",
      "Diversified business model",
      "Leading market position in Australia",
    ],
    keyRisks: [
      "Exposure to the Australian housing market",
      "Regulatory risks",
      "Competition from other financial institutions",
    ],
    investmentOutlook: "Positive",
    latestReportLink:
      "https://www.example.com/investment-reports/commbank-2024-01-16.pdf",
  },
  {
    id: 2,
    name: "Westpac Banking Corporation",
    issuerType: "Bank",
    creditRating: "A+",
    keyStrengths: [
      "Strong retail banking franchise",
      "Growing wealth management business",
      "Solid capital position",
    ],
    keyRisks: [
      "Exposure to the Australian economy",
      "Legacy issues from past misconduct",
      "Technology risks",
    ],
    investmentOutlook: "Neutral",
    latestReportLink:
      "https://www.example.com/investment-reports/westpac-2024-01-15.pdf",
  },
  {
    id: 3,
    name: "National Australia Bank (NAB)",
    issuerType: "Bank",
    creditRating: "AA-",
    keyStrengths: [
      "Strong corporate and business banking",
      "Focus on risk management",
      "Growing digital capabilities",
    ],
    keyRisks: [
      "Exposure to the resources sector",
      "Competition from mortgage brokers",
      "Compliance costs",
    ],
    investmentOutlook: "Neutral",
    latestReportLink:
      "https://www.example.com/investment-reports/nab-2024-01-16.pdf",
  },
  {
    id: 4,
    name: "Australia and New Zealand Banking Group (ANZ)",
    issuerType: "Bank",
    creditRating: "AA",
    keyStrengths: [
      "Strong presence in New Zealand",
      "Focus on Asia-Pacific markets",
      "Efficient cost structure",
    ],
    keyRisks: [
      "Exposure to volatile emerging markets",
      "Regulatory changes in New Zealand",
      "Competition from foreign banks",
    ],
    investmentOutlook: "Cautious",
    latestReportLink:
      "https://www.example.com/investment-reports/anz-2024-01-16.pdf",
  },
  {
    id: 5,
    name: "Telstra Corporation Limited",
    issuerType: "Telecommunications",
    creditRating: "BBB+",
    keyStrengths: [
      "Dominant market position in Australia",
      "Strong mobile network",
      "Growing fiber optic network",
    ],
    keyRisks: [
      "Competition from NBN Co",
      "Regulatory pressure on pricing",
      "Technological disruption",
    ],
    investmentOutlook: "Neutral",
    latestReportLink:
      "https://www.example.com/investment-reports/telstra-2024-01-16.pdf",
  },
  {
    id: 6,
    name: "Ausgrid",
    issuerType: "Electricity utility",
    creditRating: "AA-",
    keyStrengths: [
      "Regulated monopoly in New South Wales",
      "Focus on network reliability and investment",
      "Strong track record of financial performance",
    ],
    keyRisks: [
      "Regulatory uncertainty",
      "Competition from renewable energy sources",
      "Cybersecurity threats",
    ],
    investmentOutlook: "Positive",
    latestReportLink:
      "https://www.example.com/investment-reports/ausgrid-2024-01-16.pdf",
  },
];

const devSkillsDB1 = [
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

function create(element) {
  const newElement = {};
  newElement.id = devSkillsDB[devSkillsDB.length - 1].id + 1;
  newElement.name = element.name;
  newElement.creditRating = element.creditRating;
  devSkillsDB.push(newElement);
  // res.json(newSkill);
}

function update(req, res) {
  const index = devSkillsDB.findIndex(
    (skill) => skill.id === parseInt(req.params.id)
  );
  const skill = devSkillsDB.find((skill) => skill.id === index);

  // devSkillsDB.splice(index, 1);

  console.log(skill);
  skill.id = index;
  skill.name = req.body.name;
  skill.creditRating = req.body.creditRating;
  // devSkillsDB.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const index = devSkillsDB.findIndex((skill) => skill.id === id);
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
