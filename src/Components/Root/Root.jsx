import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading'; 

const Root = () => {
    const navigation = useNavigation(); 

    return (
        <div className='max-w-[1200px] mx-auto relative'>
            {navigation.state === 'loading' && <Loading />} 

            <Navbar />
            <Outlet />
            <Footer />
        </div>
        
    );
};

export default Root;
