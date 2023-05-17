import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {BsFillTrash3Fill}  from 'React-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)


if (cart.length === 0){

    return(
        <div className="container my-5">
            <h2>Tu carrito de compra esta vacio</h2>
            <hr />
            <p>Añade un producto a tu carrito</p>
            <Link to="/" className="btn btn-success">Agregar Productos</Link>
        </div>
    )
}




return (
    <div className="container my-5">

        <h2 >Tu Compra</h2>
            <hr />
        

            {
                cart.map((item) => (
                    <div key={item.id}>
                            <h3>{item.nombre}</h3>
                            <img src={item.img}/>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Subtotal: {item.cantidad * item.precio}</p>
                            <button onClick={()=> removeItem (item.id)} className="btn btn-danger"><BsFillTrash3Fill/></button>
                            <hr />
                    </div>

                ))
            }

        <div>
            <h3>TOTAL: ${totalCompra()} </h3> 
            <hr />
            <button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</button>
        </div>
        </div>
        
)
}

export default Cart