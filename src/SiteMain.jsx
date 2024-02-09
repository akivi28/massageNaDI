import React from 'react';

const SiteMain=()=>{
    return(<div className='mainPage'>
        <div className='headerContainer'>
            <div className='infoContainer'>
                <p className='phoneInfo'>Надія +38 099 361 78 94</p>
                <h2 className='massageInLviv'>Массаж у Львові</h2>
                <p>Navigation</p>
                <h1 className='massageStudio'>Студія массажу</h1>
                <img src="src/assets/logo.png" alt="NADI logo" />
                <button className='servicesbtn'>Послуги</button>
            </div>
        </div>
        <div className='bodyContainer'>
            <div className='firstElem'>
                <div className='photoContainer'>
                    <img src="src/assets/1in1elem.jpeg" alt="photo massage 1" />
                    <img src="src/assets/2in1elem.jpeg" alt="photo massage 2" />
                    <img src="src/assets/3in1elem.jpeg" alt="photo massage 3" />
                    <img src="src/assets/4in1elem.jpeg" alt="photo massage 4" />
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
                    <img src="src/assets/headerBackground.png" alt="" />
                    <img src="src/assets/2in2.jpg" alt="" />
                    <img src="src/assets/3in2.jpeg" alt="" />
                    <img src="src/assets/4in1elem.jpeg" alt="" />
                </div>
                <button className='servicesbtn black'>Послуги</button>
            </div>
        </div>
        <footer>
            <h2>Домашня студія массажу</h2>
            <h2>NADI</h2>
            <div>
                <a href="https://www.facebook.com/Nadi.Massage/">
                    <img className='facebookLogo' src="src/assets/facebook-logo.png" alt="facebook-logo" />
                </a>
                <a href="">
                    <img className='twiterLogo' src="src/assets/twitterlogo.png" alt="twiter-logo" />
                </a>
            </div>
        </footer>
    </div>)
}

export default SiteMain;