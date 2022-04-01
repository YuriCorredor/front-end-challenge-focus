import { encode } from "base-64";

const token = process.env.ACCESS_TOKEN
let url = "https://homologacao.focusnfe.com.br/v2/ceps"

export default async function handler(req, res) {

    const { cep } = req.body

    try{
        const response = await fetch(`${url}/${cep}`, {
            method: "GET",
            headers: {
                "Authorization": `Basic ${encode(`${token}`)}`
            }
        })
        const info = await response.json()
        res.status(200).json({ data: info, status: 200 })
    } catch (error) {
        res.status(500).json({ error, status: 500 })
    }
}