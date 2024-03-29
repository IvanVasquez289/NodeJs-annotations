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

const {httpClientPluggin} = require('../plugins')

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = await httpClientPluggin.get(url)
    return pokemon.name
}

module.exports = getPokemonById