const url = "https://homologacao.focusnfe.com.br/v2/ceps"
let options = {
    method: 'GET',
    headers: {
        'Authorization': `Basic `,
        'Access-Control-Allow-Origin': '*'
    }
}

export const getInfoFromCep = async cep => {
    let info

    const response = await fetch("/api/v1/cep")
    info = await response.json()
    
    console.log(info)
    return info
}