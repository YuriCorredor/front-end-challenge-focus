export default function CallToAction() {
    return (
        <div className="w-full flex justify-center items-center my-12">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center">
                <div className="flex flex-col w-full text-center px-2 justify-center items-center mt-8">
                    <h1 className="text-5xl font-semibold text-text_primary mb-2">Mais de <span className="text-[#27ae60] hover:text-7xl transition-all">9000</span> clientes satisfeitos</h1>
                    <p className="text-lg font-semibold text-text_secondary">Comece a avançar agora mesmo na direção de seus objetivos.</p>
                    <a 
                        rel="noreferrer" 
                        target="_blank" 
                        href="https://focusnfe.com.br/contato/" 
                        className="mx-4 w-fit p-4 mt-8 rounded-md text-[#F6F9FF] text-lg font-medium bg-[#27ae60] hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
                    >Contate-nos</a>
                </div>
            </div>
        </div>
    )
}
