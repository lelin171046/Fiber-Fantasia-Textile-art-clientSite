import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='relative'>
            <Header></Header>
            <main className='flex-grow mb-4 min-h-[calc(100vh-116px)]'>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;