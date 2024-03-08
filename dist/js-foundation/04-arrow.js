"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];
const getUserById = (id, callback) => {
    let user = users.find(u => u.id === id);
    (user)
        ? callback(undefined, user)
        : callback('No user with that ID');
};
exports.getUserById = getUserById;
