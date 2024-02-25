interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
]

export const  getUserById = (id: number, callback: (error?: string,user?: User) => void) => {
    let user = users.find(u => u.id === id);
    (user)
        ? callback(undefined, user)
        : callback('No user with that ID')
}


