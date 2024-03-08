import { heros } from "../../src/js-foundation/02-destructuring"
describe('js-foundation/02-destructuring',()=>{

    test('heroes should contain hulk and ironman',()=>{
        expect(heros).toContain('hulk')
        expect(heros).toContain('ironman')
    })

    test('ironman should be first and hulk third',()=>{
        const [ironman, ,hulk] = heros;
        expect(ironman).toBe('ironman');
        expect(hulk).toBe('hulk');
    })
})