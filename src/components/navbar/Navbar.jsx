import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets"
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("menu")
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className='navbar'>
            <Link to="/">
                <img className='logo' src={assets.brand} alt="Company Logo" />
            </Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <FontAwesomeIcon className='nav-cart' icon={faCartShopping} />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}><span className='btn-sign'>Sign in</span></button>
            </div>
        </div>

    )
}

export default Navbar
