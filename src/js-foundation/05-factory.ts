// const { getAge,uuidv4} = require('../plugins')

interface  MakeBuildProps {
    getAge: (birthdate: string) => string;
    uuidv4: () => void;
}
interface  PersonOptions {
    name: string;
    birthdate: string;
}
const makeBuildPerson = ({getAge,uuidv4}: MakeBuildProps) => {
    
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

module.exports = {
    makeBuildPerson,
}