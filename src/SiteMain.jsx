import React from 'react';
import nadiLogo from './assets/logo.png';
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
import './SiteMain.css';

const SiteMain=()=>{
    return(<div className='mainPage'>
        <title>Головна</title>
        <div className='headerContainer'>
            <div className='infoContainer'>
                <p className='phoneInfo'>Надія +38 099 361 78 94</p>
                <h2 className='massageInLviv'>Массаж у Львові</h2>
                <h1 className='massageStudio'>Студія массажу</h1>
                <img src={nadiLogo} alt="NADI logo"/>
                <button className='servicesbtn'>Послуги</button>
            </div>
        </div>
        <div className='bodyContainer'>
            <div className='bodyBg'/>
                <div className='firstElem'>
                    <div className='photoContainer'>
                        <img src={photo1} alt="photo massage 1" />
                        <img src={photo2} alt="photo massage 2" />
                        <img src={photo3} alt="photo massage 3" />
                        <img src={photo4} alt="photo massage 4" />
                    </div>
                    <div className='textContainer'>
                        <p>Обери свій улюблений массаж.</p>
                        <p>Тайський, Розслабляючий, Массаж спини або усього тіла, Відновлювальний...</p>
                        <br />
                        <p>Якість масажу залишається завжди високою!</p>
                    </div>
                </div>
                <div className='secondElem'>
                    <p>Якісний масаж від досвідченого майстра.</p>
                    <br />
                    <br />
                    <p>Досвід, затишок та розслабляюча музика допоможуть повернути енергію та силу вашого тіла.</p>
                </div>
                <div className='thirdElem'>
                    <div className='imgContainer'>
                        <img src={bg} alt="photo massage 5" />
                        <img src={photo5} alt="photo massage 6" />
                        <img src={photo6} alt="photo massage 7" />
                        <img src={photo7} alt="photo massage 8" />
                    </div>
                    <button className='servicesbtn black'>Послуги</button>
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

export default SiteMain;