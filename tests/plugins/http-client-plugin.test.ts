import { httpClientPluggin } from "../../src/plugins"

describe('plugins/http-client',()=>{
    test('http-client should return a string', async()=>{
        const data = await httpClientPluggin.get('https://jsonplaceholder.typicode.com/todos/1')
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        })
    })

    test('http-client should have POST,PUT and DELETE methods',()=>{
        expect(typeof httpClientPluggin.post).toBe('function')
        expect(typeof httpClientPluggin.put).toBe('function')
        expect(typeof httpClientPluggin.delete).toBe('function')
        expect(typeof httpClientPluggin.get).toBe('function')
    })
})