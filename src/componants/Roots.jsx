import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import Footer from './Footer/Footer';

const Roots = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;