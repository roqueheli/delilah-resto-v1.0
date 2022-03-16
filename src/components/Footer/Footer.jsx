import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../../styles/footer.css"

function Footer() {
    return (
        <footer className="footer_container day_mode">
            <div className="footer_subcontainer day_mode">
                <p className="footer_texto">© 2022 — Abuelo Burguer's</p>
                <section className="iconos_footer">
                    <a href="https://www.instagram.com/abueloburgers.cl/" target="_blank" rel="noreferrer"><FontAwesomeIcon className='img_footer' icon={faInstagram}/></a>
                </section>
                <section className='catatumbo_subcontainer'>
                    <img className='img_catatumbo' src="../../../../images/CatLogo.png" alt="catatumbo-logo" />
                </section>
            </div>
        </footer>
    )
};

export default Footer;