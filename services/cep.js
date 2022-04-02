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
        const response = await fetch("/api/v1/CepInfo", options)
        info = await response.json()
    } catch (error) {
        console.log(error)
    }
    
    return info
}

export const getCepFromInfo = async params => {
    let info
    console.log(params)
    options.body = JSON.stringify({params})

    try {
        const response = await fetch("/api/v1/InfoCep", options)
        info = await response.json()
    } catch (error) {
        console.log(error)
    }
    
    return info
}