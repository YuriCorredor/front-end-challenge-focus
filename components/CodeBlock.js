import { CopyBlock, tomorrowNightEighties } from "react-code-blocks"
import ReactLoading from 'react-loading'

export default function CodeBlock({ info, language }) {
    return (
        <div className={`w-full flex flex-col md:px-6 mt-12 mb-2 break-normal`}>
            <div className="flex flex-wrap mx-0 mb-2 sm:mx-4">
                <h1 className="text-bold text-text_primary">Resposta</h1>
                <p className="ml-2 text-text_secondary">({info?.status ? info?.status : "Envie a requisição"})</p>
            </div>
            {info == "loading" ? 
            <div className="mx-0 sm:mx-4 flex justify-center rounded-sm bg-[#2d2d2d]">
                <ReactLoading className="m-4" type="bubbles" color="#27ae60" height={80} width={100} />
            </div> 
            : 
            <div className={`mx-0 sm:mx-4 overflow-auto max-h-[1800px] sm:max-h-[400px]`}>
                <CopyBlock
                    codeBlock
                    text={JSON.stringify(info?.data, null, 2) ? JSON.stringify(info?.data, null, 2) : ""}
                    language={language}
                    theme={tomorrowNightEighties}
                />
            </div>}
        </div>
    )
}
