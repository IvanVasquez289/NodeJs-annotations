const axios = require('axios');

const httpClientPluggin = {
    get: async(url) => {
        const {data} = await axios(url)
        return data
        // const resp = await fetch(url)
        // return await resp.json()
    },
    post: async(url,body) => {},
    put: async(url,body) => {},
    delete: async(url) => {},

}

module.exports= {
    httpClientPluggin
};