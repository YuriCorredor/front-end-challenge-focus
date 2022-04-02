export default function RequstInfo({ http, url, description, overview }) {
    return (
        <div className="flex flex-col">
            <p className="text-text_secondary font-semibold">{overview}</p>
            <div>
                <span className="font-semibold text-3xl text-[#27ae60] mr-3">{http}</span>
                <span className="text-text_primary text-3xl font-semibold">{url}</span>
                <p className="mt-5 px-3 text-lg break-normal text-text_primary">{description}</p>
            </div>
        </div>
    )
}
