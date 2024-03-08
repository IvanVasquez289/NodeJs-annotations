import { getAge } from "../../src/plugins"

describe('plugins/get-age',()=>{
    test('getAge should return the age of a person',()=>{
        const  birthdate = ('2002-09-13')
        const age = getAge(birthdate)
        expect(typeof age).toBe('number')
    })

    test('getAge should return current age',()=>{
        const birthdate = ('2002-09-13')
        const age = getAge(birthdate)
        
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toEqual(calculatedAge)
    })

    test('getAge should 0 years',()=>{
        // Nos permite espiar  el comportamiento de una flecha, estas tienen metodos
        // Esos metodos nosotros los podemos espiar y sobreescribr
        const spy = jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(2002)

        const birthdate = ('2002-09-13')
        const age = getAge(birthdate)
        expect(age).toBe(0)
        expect(spy).toHaveBeenCalled()
    })
})