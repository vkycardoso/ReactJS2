import { useEffect } from "react"
import { withProductsData } from "./withProductsData"


const Nosotros = ({productos, loading}) => {

    const handleClickear = (event) => {
        event.stopPropagation()
        console.log(event)
    }

    useEffect(() => {
        window.addEventListener('click', handleClickear)

        return () => {
            window.removeEventListener('click', handleClickear)
        }

    }, [])


    return (
        <div className="container my-5" onClick={handleClickear}>
            <h2>Nosotros</h2>
            <hr/>
        </div>
    )
}

export default withProductsData(Nosotros)