import { useState } from "react"
import { getInfoFromCep } from "../../services/cep"
import CodeBlock from "../CodeBlock"
import Parameters from "../Parameters"
import RequestInfo from "../RequestInfo"

export default function CepInfo() {

    const [cep, setCep] = useState("{codigo_cep}")
    const [inputError, setInputError] = useState(false)
    const [info, setInfo] = useState("idle")
    const [queryString, setQueryString] = useState("{codigo_cep}")

    const handleCepChange = e => {
        setInputError(false)
        setCep(e.target.value)
        if (e.target.value == "") setQueryString("{codigo_cep}")
        else setQueryString(e.target.value)
    }

    const handleClick = async () => {
        let info
        if (cep !== "") {
            info = await getInfoFromCep(cep)
            setInfo(info)
        } 
        else setInputError(true)
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row md:px-6 mt-24 break-all">
                <RequestInfo 
                    http={"GET"}
                    url={"/ceps/{codigo_cep}"}
                    description={"Retorna informações sobre o CEP, como o Estado, a Cidade, o Bairro..."}
                    overview={"Informações dado cep"}
                />
                <Parameters 
                    handleClick={handleClick}
                    params={[
                        {
                            title: "Código CEP*",
                            placeholder: "CEP",
                            inputError: inputError,
                            handleChange: handleCepChange,
                            required: true
                        }
                    ]}
                    baseUrl={"https://homologacao.focusnfe.com.br/v2/ceps/"}
                    queryString={queryString}
                />
            </div>
            <CodeBlock
                language={"json"}
                info={info}
            />
        </>
    )
}
