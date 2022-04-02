const url = "https://homologacao.focusnfe.com.br/v2/ceps"
let options = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}

export const getInfoFromCep = async cep => {
    let info
    options.body = JSON.stringify({cep})

    try {
        const response = await fetch("/api/v1/cep", options)
        info = await response.json()
    } catch (error) {
        console.log(error)
    }
    
    return info
}