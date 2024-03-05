import React from "react";
import './Contact.css';
import facebookLogo from './assets/facebook-logo.png';
import twitterLogo from './assets/twitterlogo.png';

const Contact = () => {
    return (<>
        <div className="contactPage">
            <div className='contactHeaderContainer'>
                <h2>Надія</h2>
                <h1>Контакти</h1>
                <div className='square tl'></div>
                <div className='square bl'></div>
                <div className='square tr'></div>
                <div className='square br'></div>
            </div>
            <div className="contactBodyContainer">
                <div className="contactInfo">
                    <p>Телефон: +38 099 361 78 94</p>
                    <p>Пошта: Nadi.Massage.Nadi@Gmail.Com</p>
                    <p>Адреса: м.Львів вул. Тролейбусна 10, 79000 Україна</p>
                </div>
                <div className="contactMap">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.9541349628457!2d24.003961312490254!3d49.80572993345559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7be40937795%3A0x6f06c1ec7c26875b!2z0LLRg9C70LjRhtGPINCi0YDQvtC70LXQudCx0YPRgdC90LAsIDEwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1suk!2sua!4v1709600332688!5m2!1suk!2sua"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <footer>
                <h2>Домашня студія массажу</h2>
                <h2>NADI</h2>
                <div>
                    <a href="https://www.facebook.com/Nadi.Massage/">
                        <img className='facebookLogo' src={facebookLogo} alt="facebook-logo" />
                    </a>
                    <a href="">
                        <img className='twiterLogo' src={twitterLogo} alt="twiter-logo" />
                    </a>
                </div>
            </footer>
        </div>
    </>)
}

export default Contact;