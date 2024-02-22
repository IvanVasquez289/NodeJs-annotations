const {getAge,uuidv4} = require('./plugins')

// const {emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const {getUserById} = require('./js-foundation/03-callbacks')
// const {getUserById} = require('./js-foundation/04-arrow')
// const {makeBuildPerson} = require('./js-foundation/05-factory')
// const getPokemonById = require('./js-foundation/06-promises')
const {buildLogger} = require('./plugins')
const logger = buildLogger('app.js')
logger.log('Hola mundo')
logger.error('Este es un error')

// getPokemonById(5,(pokemon)=>{
//     console.log(pokemon)
// })

// getPokemonById(6)
//     .then((pokemon) => console.log({pokemon}))
//     .catch((err) => console.log('No se encontro el pokemon'))
//     .finally(() => console.log('Finalmente'))



//* Referencia a las factory function y uso
// const makePerson = makeBuildPerson({getAge, uuidv4})
// const obj = {name: 'Ivan', birthdate: '2002-09-13'}
// const  person = makePerson(obj)
// console.log(person) // Person { name: 'Ivan', age: 1

