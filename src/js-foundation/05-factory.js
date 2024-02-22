// const { getAge,uuidv4} = require('../plugins')

const makeBuildPerson = ({getAge,uuidv4}) => {
    
    return ({name,birthdate}) => {
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