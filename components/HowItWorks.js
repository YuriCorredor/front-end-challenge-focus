import { CopyBlock, tomorrowNightEighties } from "react-code-blocks"

const code = `const base = require("base-64")

(async () => {
    const token = "token_secreto"
    let url_desenvolvimento = "https://homologacao.focusnfe.com.br/v2/{algum_end_point}"
    let url_producao = "https://api.focusnfe.com.br/v2/{algum_end_point}"
    const response = await fetch(url_desenvolvimento, {
        method: "GET",
        headers: {
            "Authorization": base.encode(token)
        }
    })
    const info = await response.json()
}) ()
`

export default function HowItWorks() {
    return (
        <div className="w-full flex flex-col mt-32 p-2 break-normal">
            <div className="w-full flex flex-col p-2 py-4 sm:p-8 self-center font-semibold">
                <h1 className="text-text_primary text-3xl self-center mb-6">Como a API funciona</h1>
                <p className="text-text_secondary">
                    Nós exemplos acima as requisições são feitas por um servidor, que conecta-se aos servidores da FOCUS
                    utilizando o método HTTP Basic Auth para autenticação com um token fornecido por eles. <span className="text-primary hover:underline transition-all"><a rel="noreferrer" target="_blank" href="https://focusnfe.com.br/doc/?javascript#introducao_autenticacao">Saiba mais.</a></span>
                </p>
                <p className="text-text_secondary mt-2">
                    Todos as requisições seguem esse mesmo padrão, mudando apenas o endpoint.
                </p>
            </div>
            <div className="sm:mx-8 overflow-auto">
                <CopyBlock 
                    codeBlock
                    text={code}
                    language={"javascript"}
                    theme={tomorrowNightEighties}
                />
            </div>
            <div className="w-full flex flex-col p-2 py-4 sm:p-8 self-center font-semibold">
                <h1 className="text-text_secondary text-lg text-center underline">Com a nossa documentação poderosa, seus desenvolvedores não terão dificuldade alguma para implementar os nossos serviços.</h1>
            </div>
        </div>
    )
}