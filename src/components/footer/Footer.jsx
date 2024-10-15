import React from 'react'
import "./Footer.css"
import { assets } from "../../assets/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className='footer-content-left'>
                    <img src={assets.footer_brand} alt="Logo" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum expedita odit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, commodi!
                    </p>
                    <div className="footer-social-icon">
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91-9611359277</li>
                        <li>foodezy@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 ©️ Foodezy.com All Rights Reserved</p>
        </div>
    )
}

export default Footer
