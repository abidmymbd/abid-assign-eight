import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const Home = () => {

    const data = useLoaderData()

    // console.log(data)

    return (
        <div className='bg-[#d2d2d233]'>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;