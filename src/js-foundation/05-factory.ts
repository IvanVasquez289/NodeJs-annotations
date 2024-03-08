// const { getAge,uuidv4} = require('../plugins')

interface  MakeBuildProps {
    getAge: (birthdate: string) => number;
    uuidv4: () => string;
}
interface  PersonOptions {
    name: string;
    birthdate: string;
}
export const makeBuildPerson = ({getAge,uuidv4}: MakeBuildProps) => {
    
    return ({name,birthdate}: PersonOptions) => {
        return {
            id: uuidv4(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }

}

// const obj = {name: 'Ivan', birthdate: '2002-09-13'}
// const person = buildPerson(obj)
// console.log(person)

// module.exports = {
//     makeBuildPerson,
// }