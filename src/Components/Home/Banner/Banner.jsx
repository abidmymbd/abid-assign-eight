import React from 'react';
import storeImg from './fi_16076057.png'
import storeImg2 from './fi_5977575.png'
import bannerImg from './hero.png'

const Banner = () => {
    return (
        <div className='py-10'>
            <div className='text-center max-w-[800px] mx-auto'>
                <h1 className='text-6xl font-bold py-5'>We Build <br /> <span className="bg-gradient-to-l from-purple-500 to-purple-700 bg-clip-text text-transparent">Productive</span> Apps</h1>
                <p className='mb-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='text-center pt-5'>
                <a href="https://play.google.com/store/apps/" target="_blank">
                    <button className="btn btn-xs text-xl sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-3 border-1 border-gray-300"> <img className='ml-1' src={storeImg} alt="" /> Google Play</button>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank">
                    <button className="btn btn-xs text-xl sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-1 border-gray-300"> <img className='ml-1' src={storeImg2} alt="" /> App Store</button>
                </a>
            </div>
            <div className='max-w-[800px] mx-auto mt-9'>
                <img src={bannerImg} alt="" />
            </div>
            <div className='bg-gradient-to-t from-purple-500 to-purple-700 py-15'>
                <div className='max-w-[900px] mx-auto'>
                    <h1 className='text-center text-3xl text-white font-bold'>Trusted by Millions, Built for You</h1>
                </div>
                <div className='max-w-[700px] mx-auto py-5 md:flex justify-between items-center text-white '>
                    <div className='text-center mb-10 md:mb-0'>
                        <p>Total Downloads</p>
                        <h1 className='py-3 text-5xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center mb-10 md:mb-0'>
                        <p>Total Reviews</p>
                        <h1 className='py-3 text-5xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p>Active Apps</p>
                        <h1 className='py-3 text-5xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;