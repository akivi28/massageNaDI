import React from 'react';
import './AboutMaster.css';
import photo1 from './assets/elem1.jpeg';
import photo2 from './assets/2in1elem.jpeg';
import photo3 from './assets/4in1elem.jpeg'
import facebookLogo from './assets/facebook-logo.png';
import twitterLogo from './assets/twitterlogo.png';

const AboutMaster =()=>{
    return(<div className='aboutMasterPage'>
        <title>Про майстра</title>
        <div className='AbMstrHeaderContainer'>
            <div className='AbMstrInfoBlock'>
                <h2>Досвід та професійність</h2>
                <h1>Надія</h1>
            </div>
            <div className='square tl'></div>
            <div className='square bl'></div>
            <div className='square tr'></div>
            <div className='square br'></div>
        </div>
        <div className='AbMstrBodyContainer'>
            <div className='AbMasterFirstElem'>
                <p>Досвідчений майстер з багаторічним стажем. Індивідуальний підхід, рекомендації та індивідуальні вправи забеспечать максимальний комфорт та відновлення вашого тіла.</p>
            </div>
            <div className='AbMAsterSecondElement'>
                <h2>Досвід та напрацювання</h2>
                <div className='expElemContainer'>
                    <div className='expElem'>
                        <img src={photo1} alt="massage photo" />
                        <h3>Тайский Масаж</h3>
                    </div>
                    <div className='expElem'>
                        <img src={photo3} alt="massage photo" />
                        <h3>Класичний Масаж Спини</h3>
                    </div>
                    <div className='expElem'>
                        <img src={photo2} alt="massage photo" />
                        <h3>Релакс Масаж</h3>
                    </div>
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
export default AboutMaster;