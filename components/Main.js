import Home from "./main/Home"

export default function Main() {
    return (
        <div className="w-full flex justify-center">
            <div className="z-10 max-w-6xl w-full shadow-sm p-2 overflow-hidden bg-[#F6F9FF] flex flex-wrap flex-col mx-3 sm:mx-16 mt-[-30px] border-2">
                <Home />
            </div>
        </div>
    )
}
