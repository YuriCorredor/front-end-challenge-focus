import { encode } from "base-64";

const token = process.env.ACCESS_TOKEN
let url = "https://homologacao.focusnfe.com.br/v2/ceps"

export default async function handler(req, res) {
    let queryString = ""
    const { params } = req.body

    if (params.ibgeCode !== "") {
        queryString += `codigo_ibge=${params.ibgeCode}`
    }

    if (params.uf !== "") {
        queryString += `&uf=${params.uf}`
    }

    if (params.place !== "") {
        queryString += `&logradouro=${params.place}`
    }

    if (params.locality !== "") {
        queryString += `&localidade=${params.locality}`
    }

    try{
        const response = await fetch(`${url}?${queryString}`, {
            method: "GET",
            headers: {
                "Authorization": `${encode(`${token}`)}`
            }
        })
        const info = await response.json()
        res.status(response.status).json({ data: info, status: response.status })
    } catch (error) {
        res.status(500).json({ error, status: 500 })
    }
}