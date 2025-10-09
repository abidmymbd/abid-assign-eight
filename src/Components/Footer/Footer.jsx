import React from 'react';
import LogoImg from '../assets/logo.png'

import FootImg from '../assets/Frame1171277687.png'
import FootImg2 from '../assets/fi_145807.png'
import FootImg3 from '../assets/Frame1171277690.png'

const Footer = () => {
    return (
        <div className='bg-[#001931]'>
            <footer className="footer sm:footer-horizontal px-2 pt-5 flex justify-between border-1 border-b-gray-400">
                <aside>
                    <div className='flex justify-between items-center'>
                        <img className='w-8 mr-2' src={LogoImg} alt="" />
                        <a className="font-bold text-xl text-white">HERO.IO</a>
                    </div>
                </aside>
                <nav className=''>
                    <h6 className=" text-white">Social Links</h6>
                    <div className="flex gap-4">
                        <a>
                            <img src={FootImg} alt="" />
                        </a>
                        <a>
                            <img src={FootImg2} alt="" />
                        </a>
                        <a className='mr-2'>
                            <img src={FootImg3} alt="" />
                        </a>
                    </div>
                </nav>
            </footer>
            <div>
                <h1 className='text-center text-white py-5'>Copyright © 2025 - All right reserved</h1>
            </div>
        </div>
    );
};

export default Footer;