export default function Home() {
    return (
        <div className="flex p-2 justify-around mt-8 mb-4">
            <div className="flex flex-col">
                <h1 className="text-text_primary p-4 pt-0 text-3xl sm:text-5xl font-semibold">A API para emissão de notas e documentos fiscais, mas não somente</h1>
                <p className="text-text_secondary text-md sm:text-lg font-medium p-4 py-0">A Focus fornece também &apos;&apos;APIs acessórias&apos;&apos; para facilitar a vida do desenvolvedor.</p>
                <p className="text-text_secondary text-md sm:text-lg font-medium p-4 pt-0 pb-8">Conheça a nossa API de CEPs. Explore o quanto quiser!</p>
                <a rel="noreferrer" target="_blank" href="https://focusnfe.com.br/doc/#consulta-de-cep-beta_consulta-de-cep-beta" className="mx-4 w-fit p-4 rounded-md text-[#F6F9FF] text-md font-medium bg-primary hover:scale-110 hover:shadow-lg transition-all cursor-pointer">Saiba Mais</a>
            </div>
            <img className="w-auto max-w-[300px] h-fit hidden lg:block hover:scale-110 transition-all" src='world.png' />
        </div>
    )
}
