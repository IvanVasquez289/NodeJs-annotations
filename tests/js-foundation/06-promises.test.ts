import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises', () => {
    test('getPokemonById should return a pokemon', async ()=>{
        const pokemonId = 1;
        const pokemonName =  await getPokemonById(pokemonId)
        expect(pokemonName).toBe('bulbasaur');
    })

    test('should return an error if pokemon does not exist', async ()=>{
        const pokemonId = 10000;
        try {
            await getPokemonById(pokemonId)
        } catch (error) {
            expect(error).toBe(`Pokemon not found with  id ${pokemonId}`)
        }
        
    })
})