import React from 'react';
import imgg from './error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <div className='max-w-[1200px] mx-auto text-center mt-30'>
            <img className='mx-auto w-60' src={imgg} alt="" />
            <h1 className='text-4xl font-bold mb-5'>Oops, page not found!</h1>
            <p className='text-gray-500'>The page you are looking for is not available.</p>

            <button
                onClick={() => navigate(-1)}
                className='mt-5 btn bg-gradient-to-t from-purple-500 to-purple-700 text-white'>
                Go Back
            </button>
        </div>


    );
};

export default ErrorPage;