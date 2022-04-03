export default function Social({ link, Icon }) {
    return (
        <a 
            className="p-2 mx-1 mt-2 bg-[black] shadow-lg hover:shadow-xl bg-opacity-30 rounded-md hover:bg-[#27ae60] group transition-all"
            rel="noreferrer" 
            target="_blank" 
            href={link}
        >
            <Icon
                size={28}
                className="text-[#27ae60] group-hover:text-[#F6F9FF] transition-all"
            />
        </a>
    )
}
