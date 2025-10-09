import React from 'react';
import { Link } from 'react-router';
import LogoImg from '../assets/logo.png'
import GitImg from '../assets/fi_2111432.png'

const Navbar = () => {

    const links = <>
        <Link
            to='/'>
            <li className='m-2 font-semibold text-black transition-all duration-300 cursor-pointer
           hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:bg-clip-text hover:text-transparent'>Home</li></Link>
        <Link
            to='/apps'>
            <li className='m-2 font-semibold text-black transition-all duration-300 cursor-pointer
           hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:bg-clip-text hover:text-transparent'>Apps</li></Link>
        <Link
            to='/installation'>
            <li className='m-2 font-semibold text-black transition-all duration-300 cursor-pointer
           hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:bg-clip-text hover:text-transparent'>Installation</li></Link>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href="/">
                    <div className='flex justify-between items-center'>
                        <img className='w-8 mr-2' src={LogoImg} alt="" />
                        <a className="font-bold text-xl bg-gradient-to-l from-purple-500 to-purple-700 bg-clip-text text-transparent">HERO.IO</a>
                    </div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/abidmymbd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-t from-purple-500 to-purple-700 text-white"><img src={GitImg} alt="" />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;