import { useState } from "react"
import { getInfoFromCep } from "../../services/cep"

export default function CepInfo() {

    const [cep, setCep] = useState("{codigo_cep}")
    const [inputError, setInputError] = useState(false)

    const handleCepChange = e => {
        setInputError(false)
        if (e.target.value == "") setCep("{codigo_cep}")
        else setCep(e.target.value)
    }

    const handleClick = async () => {
        let info
        if (cep !== "{codigo_cep}") info = await getInfoFromCep(cep)
        else setInputError(true)
        if (info?.status == 200) {
            setInputError(false)
            console.log(info.data)
        }
    }

    return (
        <div className="flex flex-col lg:flex-row md:px-6 mt-24 break-all sm:break-normal">
            <div className="flex flex-col">
                <p className="text-text_secondary font-semibold">Informações dado cep</p>
                <div>
                    <span className="font-semibold text-3xl text-[#27ae60] mr-3">GET</span>
                    <span className="text-text_primary text-3xl font-semibold">/ceps/{"{codigo_cep}"}</span>
                    <p className="mt-5 px-3 text-lg text-text_primary">Retorna informações sobre o CEP.</p>
                </div>
            </div>
            <div className="w-full border-2 mt-6 lg:mt-0 lg:ml-6 p-2">
                <p>Parâmetros</p>
                <div className="text-text_primary flex border-2 p-1 mx-2 my-4 justify-between">
                    <p>Código CEP</p>
                    <input 
                        type="text"
                        placeholder="CEP"
                        className={`w-1/2 pl-1 rounded-md focus:outline-none ${inputError ? "border-red-600 border-[1px]" : "focus:border-0"}`}
                        onChange={handleCepChange}
                    />
                    <p className="font-bold hidden sm:block">Necessário</p>
                </div>
                <div className="flex flex-wrap flex-grow items-center">
                    <button onClick={handleClick} className="mx-2 w-fit p-2 font-medium text-[#F6F9FF] bg-primary hover:scale-110 hover:shadow-lg transition-all cursor-pointer">Enviar pedido</button>
                    <p className="mx-2 text-text_secondary font-semibold text-sm break-all">https://homologacao.focusnfe.com.br/v2/ceps/{cep}</p>
                </div>
            </div>
        </div>
    )
}
