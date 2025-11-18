import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';

const Layout = () => {
    return (
       <div className='bg-gray-200 '>
           <div className='max-w-7xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Layout;