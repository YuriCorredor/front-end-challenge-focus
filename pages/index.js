import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import Head from "next/head"

export default function index() {
    return (
        <main>
            <Head>
            <title>Focus NFe</title>
            <meta name="description" content="O Focus NFe é um conjunto de APIs de integração simples e rápida. Mantenha o seu foco, economize tempo e ganhe mais dinheiro integrando o seu sistema com a Focus."/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header />
            <Main />
            <CallToAction />
            <Footer />
        </main>
    )
}
