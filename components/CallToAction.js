import Image from "next/image"

export default function CallToAction() {
    return (
        <div className="w-full flex justify-center items-center mt-[-70px]">
            <div className="max-w-7xl w-full flex justify-center">
                <Image width={225} height={300} src="/dado.png" />
            </div>
        </div>
    )
}
