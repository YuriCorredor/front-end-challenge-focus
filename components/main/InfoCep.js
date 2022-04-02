import { useState } from "react"
import Parameters from "../Parameters"
import CodeBlock from "../CodeBlock"
import RequestInfo from "../RequestInfo"
import { getCepFromInfo } from "../../services/cep"

export default function InfoCep() {

    const [ibgeCode, setIbgeCode] = useState("123456")
    const [uf, setUf] = useState("")
    const [place, setPlace] = useState("")
    const [locality, setLocality] = useState("")
    const [queryString, setQueryString] = useState("")
    const [info, setInfo] = useState("")

    const queryStringHelper = (prevString, condition, e, state) => {
        console.log(prevString)
        if (prevString.includes(condition)) {            
            const startNum = prevString.indexOf(condition)
            const endNum = startNum + state.length + condition.length
            const subString = prevString.substring(startNum, endNum)
            prevString = prevString.replace(subString, `${condition}${e.target.value}`)
        } else {
            prevString += `${condition}${e.target.value}`
        }
        if (e.target.value == "") prevString = prevString.replace(condition, "")
        return prevString
    }

    const handleIbgeCodeChange = e => {
        setIbgeCode(e.target.value)
        setQueryString(prevQueryString => {
            prevQueryString = queryStringHelper(prevQueryString, "&codigo_ibge=", e, ibgeCode)
            return prevQueryString
        })
    }

    const handleUfChange = e => {
        setUf(e.target.value)
        setQueryString(prevQueryString => {
            prevQueryString = queryStringHelper(prevQueryString, "&uf=", e, uf)
            return prevQueryString
        })
    }

    const handlePlaceChange = e => {
        setPlace(e.target.value)
        setQueryString(prevQueryString => {
            prevQueryString = queryStringHelper(prevQueryString, "&logradouro=", e, place)
            return prevQueryString
        })
    }

    const handleLocalityChange = e => {
        setLocality(e.target.value)
        setQueryString(prevQueryString => {
            prevQueryString = queryStringHelper(prevQueryString, "&localidade=", e, locality)
            return prevQueryString
        })
    }

    const handleClick = async () => {
        let info
        setInfo("loading")
        info = await getCepFromInfo({
                ibgeCode,
                uf,
                place,
                locality
            })
        setInfo(info)
    }

    const params = [
        {
            title: 'Código IBGE',
            placeholder: 'Código',
            handleChange: handleIbgeCodeChange,
            required: false
        },
        {
            title: 'UF',
            placeholder: 'UF',
            handleChange: handleUfChange,
            required: false
        },
        {
            title: 'Logradouro',
            placeholder: 'Logradouro',
            handleChange: handlePlaceChange,
            required: false
        },
        {
            title: 'Localidade',
            placeholder: 'Localidade',
            handleChange: handleLocalityChange,
            required: false
        },
    ]

    return (
        <>
            <div className="flex flex-col lg:flex-row md:px-6 mt-24 break-all">
                <RequestInfo 
                    http={"GET"}
                    url={"/ceps?{parametros}"}
                    description={"Dado informações, como a localidade, logadouro, UF e assim por diante, retornamos o CEP. É necessário preencher ao menos dois campos para que a requisição seja feita corretamente (com exceção de Municípios que possuem um único CEP, nesse caso é possível realizar a consulta informando apenas o Código IBGE)."}
                    overview={"Retorna o CEP e informações dado informações"}
                />
                <Parameters 
                    handleClick={handleClick}
                    baseUrl={"https://homologacao.focusnfe.com.br/v2/ceps?"}
                    queryString={queryString}
                    params={params}
                />
            </div>
            <CodeBlock
                language={"json"}
                info={info}
            />
        </>
    )
}
