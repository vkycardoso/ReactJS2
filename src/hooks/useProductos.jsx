import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"



export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => setProductos(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return ({
        productos,
        loading
    })
}