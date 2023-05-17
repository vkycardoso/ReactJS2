import { useState, useRef, useEffect } from "react"


export const Clicker = () => {

    const [counter, setCounter] = useState(10)
    const [saludo, setSaludo] = useState("Hola")
    // const [carrito, setCarrito] = useState([])

    const dateRef = useRef(new Date())

    const sumar = () => {
        setCounter( counter + 1 )
    }

    const agregarSaludo = () => {
        setSaludo(saludo + " hola")
    }

    

    useEffect(() => {
        console.log("Componente montado")

        return () => {
            // funcion de limpieza || cleanup effect
            console.log("COmponente desmontado")
        }
    }, [])



    return (
        <div className="container my-5">
            <button onClick={sumar} className="btn btn-primary">Click me</button>
            <p>Contador: {counter}</p>
            <p>Componente montado: {dateRef.current.toLocaleString()}</p>

            <div onClick={agregarSaludo}>
                {saludo}
            </div>
        </div>
    )
}