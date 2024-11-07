const faker = require('faker');

/**
 * @param {number} count - numero de mascotas a generar.
 * @returns {Array} - array de objetos mascota.
 */

const generatePets = (count) => {
    return Array.from({ length: count }).map(() => ({
        name: faker.name.firstName(),
        type: faker.animal.type(),
        age: faker.datatype.number({ min: 1, max: 15 }),
        adopted: false,
    }));
};

module.exports = { generatePets };
