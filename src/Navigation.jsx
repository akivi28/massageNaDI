import React from 'react';
import { Link } from 'react-router-dom';

const Navigation =()=>{
    return(<nav className='navigationBlock'>
        <ul>
            <li>
                <Link to={'/'} className='link'>Головна</Link>
            </li>
            <li>
                <Link to={'/aboutMaster'} className='link'>Про майстра</Link>
            </li>
            <li>
                <Link to={''} className='link'>Послуги</Link>
            </li>
            <li>
                <Link to={''} className='link'>Контакти</Link>
            </li>
        </ul>
    </nav>)
} 
export default Navigation;