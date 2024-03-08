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
    const user = users.find(function (user) {
        return user.id === id;
    });
    // if(!user){
    //     setTimeout(() => {
    //         callback(`USUARIO no encontraado ${id}`)
    //     }, 2500);
    //     return
    // }
    if (!user) {
        return callback(`USUARIO no encontraado ${id}`);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
