import './Navbar.scss'
import logo from '../../assets/logopng.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Buscador from '../../etx/Buscador'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                
                <img className='imgLogo' src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                    
                    <Buscador />
                </nav>
                <CartWidget />
            </div>

        </header>
    )
}


