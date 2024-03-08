import axios from "axios";
export const httpClientPluggin = {
    get: async(url: string) => {
        const {data} = await axios(url)
        return data
        // const resp = await fetch(url)
        // return await resp.json()
    },
    post: async(url: string,body: any) => {
        throw new Error('Not implemented yet')
    },
    put: async(url: string,body: any) => {
        throw new Error('Not implemented yet')
    },
    delete: async(url: string) => {
        throw new Error('Not implemented yet')
    },

}
