import React, { useContext } from 'react'
import {BsFillBasketFill} from 'React-icons/bs'
import Buscador from '../../etx/Buscador'
import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { cart, totalCantidad } = useContext(CartContext)

    return (
    
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <BsFillBasketFill/>
            <span>{totalCantidad()}</span>
        

        </Link>
        
    )
}

export default CartWidget