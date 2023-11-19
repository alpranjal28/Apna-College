const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

console.log(getRandomUser());
