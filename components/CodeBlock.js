import { CopyBlock, tomorrowNightEighties } from "react-code-blocks"

export default function CodeBlock({ info, language }) {
    return (
        <div className={`w-full flex flex-col md:px-6 mt-12 mb-2 break-normal `}>
            <div className="flex flex-wrap mx-0 mb-2 sm:mx-4">
                <h1 className="text-bold text-text_primary">Resposta</h1>
                <p className="ml-2 text-text_secondary">({info?.status ? info?.status : "Envie o pedido"})</p>
            </div>
            <div className={`mx-0 sm:mx-4 scrollbar`}>
                <CopyBlock
                    codeBlock
                    text={JSON.stringify(info?.data, null, 2) ? JSON.stringify(info?.data, null, 2) : ""}
                    language={language}
                    theme={tomorrowNightEighties}
                />
            </div>
        </div>
    )
}
