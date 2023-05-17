import { useState } from "react"


const  ItemCount = ({cantidad, setCantidad, stock, agregar}) => {
    
    const handleRestar = () => {
      cantidad > 1 &&  setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
      cantidad < stock &&  setCantidad(cantidad + 1)
    }



  return (
    <div>
        <button  onClick={handleRestar} className={`btn mx-1 ${cantidad === 1 ? "boton" : ''} ${cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"}`} disabled={cantidad === 1}>-</button>



        <span className="mx-2">{cantidad}</span>


        <button onClick={handleSumar} className={`btn mx-1 ${cantidad === stock ? "boton" : ''} ${cantidad === stock ? "btn-outline-danger" : "btn-outline-primary"}`} disabled={cantidad === stock}>+</button>


        <br />


        <button onClick={agregar} className="btn btn-success my-3">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount