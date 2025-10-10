import React from 'react';
import spinner from './logo.png'

const Loading = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white/70 z-50">
            <img
                src={spinner}
                alt="Loading..."
                className="w-30 h-30 object-contain animate-spin opacity-50"
            />
        </div>
    );
};

export default Loading;