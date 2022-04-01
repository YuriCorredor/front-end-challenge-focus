export default function Header() {
    return (
        <header className="bg-primary w-full flex justify-center px-2 sm:px-16 overflow-hidden">
            <div className="max-w-6xl w-full h-[125px] flex items-center justify-between">
                <img className="justify-self-start h-auto w-auto max-w-[128px]" src="logo.png" />
                <h1 className="hidden sm:block mt-[30px] text-white font-semibold">Consulta de CEP (beta)</h1>
            </div>
        </header>
    )
}
