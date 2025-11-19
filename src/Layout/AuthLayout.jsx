import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <img src="https://i.ibb.co/cc7KTm8j/Group-3.png" className='w-35 h-15' alt="" />
           <div className='flex items-center'>
             <div className='flex-1'>
                <Outlet></Outlet>
             </div>
             <div className='flex-1'>
                <img src="https://i.ibb.co/nsGZxwrw/auth-Image.png" alt="" />
             </div>
           </div>
        </div>
    );
};

export default AuthLayout;