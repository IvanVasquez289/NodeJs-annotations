import { uuidv4 } from "../../src/plugins"


describe('plugins/uuid', () => {
    test('getUUID() should return an id',()=>{
        const uuid = uuidv4()
        expect(typeof uuid).toBe('string')
        expect(uuid.length).toBe(36)
    })
})