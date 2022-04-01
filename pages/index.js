import { getInfoFromCep } from "../services/cep"

export default function index() {

    const handleClick = () => {
        getInfoFromCep(`23088600`)
    }

    return (
        <button onClick={handleClick}>CLICK</button>
    )
}
