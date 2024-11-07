const { generatePets } = require('../mocks/mockingPets');
const { generateUsers } = require('../mocks/mockingUsers');

exports.generateMockPets = (req, res) => {
    const count = parseInt(req.query.count) || 100;  // 100 valor por defecto
    const pets = generatePets(count);
    res.json(pets);
};

exports.generateMockUsers = async (req, res) => {
    const users = await generateUsers(50);
    res.json(users);
};

exports.insertMockData = async (req, res) => {
    const { users, pets } = req.body;
    res.json({ message: `Inserted ${users} users and ${pets} pets` });
};
