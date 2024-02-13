import React from 'react';
import './Services.css';
import photo1 from './assets/elem1.jpeg';
import photo2 from './assets/2in1elem.jpeg';
import photo3 from './assets/elem3.jpeg';
import photo4 from './assets/4in1elem.jpeg';
import bg from './assets/headerBackground.png'
import photo5 from './assets/2in2.jpg';
import photo6 from './assets/3in2.jpeg'
import photo7 from './assets/4in1elem.jpeg'
import facebookLogo from './assets/facebook-logo.png';
import twitterLogo from './assets/twitterlogo.png';

const Services =()=>{
    return(<div className='servicesPage'>
        <div className='servicesHeaderContainer'>
            <h2>Надія</h2>
            <h1>Види массажу</h1>
            <div className='square tl'></div>
            <div className='square bl'></div>
            <div className='square tr'></div>
            <div className='square br'></div>
        </div>
        <div className='servicesBodyContainer'>
            <div className='servicesImages'>
                <div className='col'>
                    <img src={bg} alt="massage photo" />
                    <img src={photo5} alt="massage photo" />
                    <img src={photo4} alt="massage photo" />
                </div>
                <div className='col'>
                    <img src={photo1} alt="massage photo" />
                    <img src={photo2} alt="massage photo" />
                    <img src={photo3} alt="massage photo" />
                </div>
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
    </div>)
}

export default Services;