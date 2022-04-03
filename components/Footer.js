import { AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import Social from './Social'

const items = [
    {
        Icon: AiFillLinkedin,
        link: "https://www.linkedin.com/company/focus-nfe/"
    },
    {
        Icon: AiFillYoutube,
        link: "https://www.youtube.com/channel/UCFM42r7nGusv0I4Kg1q0P5w/"
    },
    {
        Icon: AiFillInstagram,
        link: "https://www.instagram.com/focusnfe/"
    },
    {
        Icon: AiOutlineTwitter,
        link: "https://twitter.com/focusnfe/"
    },
    {
        Icon: FaFacebook,
        link: "https://www.facebook.com/focusnfe/"
    },
]

export default function Footer() {
    return (
        <footer className="w-full flex justify-center bg-primary p-8 pt-6 pb-4">
            <div className="flex flex-col max-w-6xl text-[#F6F9FF]">
                <div className="flex flex-wrap w-full justify-center">
                    {items.map((item, index) => <Social key={index} Icon={item.Icon} link={item.link} />)}
                </div>
                <p className="font-medium py-4 pb-0 text-sm text-center">© Copyright © 2005 - 2022 | Acras Tecnologia da Informação | CNPJ: 07.504.505/0001-32</p>
            </div>
        </footer>
    )
}
