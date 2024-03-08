import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/03-callbacks', () => {

    test('getUserById should return an error if user does not exist', (done) => {
        const userId = 10;

        getUserById(userId, (err,user) => {

            expect(err).toBe(`USUARIO no encontraado ${userId}`)
            expect(user).toBeUndefined()

            done()
        })
    })

    test('getUserById should return an user',(done)=>{
        const userId = 1;
        getUserById(userId,(err,user) => {
            expect(err).toBeUndefined()
            expect(user).toStrictEqual({id:1, name:'John Doe'})
        })
        done()
    })
})