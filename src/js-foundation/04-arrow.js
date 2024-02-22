const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
]

const  getUserById = (id, callback) => {
    let user = users.find(u => u.id === id);
    if (!user) return callback('No User Found');
    callback(null, user);
}

module.exports = {
    getUserById
}

