import { makeBuildPerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {

    const uuidv4 = () => '1234'; 
    const getAge = () => 25; 

    test('buildMakePerson should return a function',()=>{
        
        const makePerson = makeBuildPerson({uuidv4,getAge})
        expect(typeof makePerson).toBe('function')
    })

    test('make should return a person',()=>{
        
        const makePerson = makeBuildPerson({uuidv4,getAge})
        const person = makePerson({name:'Ivan', birthdate:'2002-09-13'})

        expect(person).toEqual({
            id: '1234',
            name: 'Ivan',
            birthdate: '2002-09-13',
            age: 25
        })
    })
})