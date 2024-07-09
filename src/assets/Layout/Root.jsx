import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;