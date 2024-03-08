// const getPokemonById = (id,callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     fetch(url).then((response) => {
//         response.json().then((pokemon) => {
//             callback(pokemon.name);
//         })
//     })
// }

// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     fetch(url)
//         .then((response) => response.json())
//         .then((pokemon) => {
//             callback(pokemon.name)
//         }) 
// }

// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     return fetch(url)
//         .then((response) => response.json())
//         // .then(() => { throw new Error('Pokemon no existe')})
//         .then((pokemon) => pokemon.name) 
// }

// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     const resp = await fetch(url)
//     const pokemon = await (resp.json())
//     // throw new Error('errorrrr')
//     return pokemon.name
// }

import { httpClientPluggin } from "../plugins"
export const getPokemonById = async (id: string | number): Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const pokemon = await httpClientPluggin.get(url)
        return pokemon.name
    } catch (error) {
        throw `Pokemon not found with  id ${id}`
    }
}

