import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const RoootLayout=()=>{
    return(
        <>
            <Navigation/>
            <Outlet/>
        </>
    )
}

export default RoootLayout