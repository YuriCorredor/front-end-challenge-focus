export default function Parameters({ handleClick, params, baseUrl, queryString }) {
    return (
        <div className="w-full border-2 mt-6 lg:mt-0 lg:ml-6 p-2">
            <p>Parâmetros</p>
            {params.map((param, index) => {
                return (
                    <div key={index} className="text-text_primary text-sm flex border-2 p-1 mx-2 my-4 items-center justify-between">
                    <p>{param.title}</p>
                    <input
                        type="text"
                        placeholder={param.placeholder}
                        className={`w-1/2 pl-1 rounded-md focus:outline-none ${param.inputError ? "border-red-600 border-[1px]" : "focus:border-0"}`}
                        onChange={param.handleChange}
                    />
                    <p className="font-semibold hidden sm:block">{param.required ? "Necessário" : "Opcional"}</p>
                </div>
                )
            })}
            <div className="flex flex-wrap flex-grow items-center">
                <button onClick={handleClick} className="mx-2 w-fit p-2 font-medium text-[#F6F9FF] bg-primary hover:scale-110 hover:shadow-lg transition-all cursor-pointer">Enviar pedido</button>
                <p className="mx-2 text-text_secondary font-semibold text-sm break-all">{baseUrl}{queryString}</p>
            </div>
        </div>
    )
}