import React, { useEffect, useState } from 'react';
import iconImg from './icon-downloads.png';
import iconImg2 from './icon-ratings.png';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [toast, setToast] = useState('');
    const [progress, setProgress] = useState(100);
    const [sortOption, setSortOption] = useState('size');
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(stored);
    }, []);

    const handleUninstall = (id) => {
        const app = installedApps.find(a => a.id === id);
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem('installedApps', JSON.stringify(updated));


        setToast(`${app.title} uninstalled successfully!`);
        setProgress(100);

        let timer = setInterval(() => {
            setProgress(prev => {
                if (prev <= 0) {
                    clearInterval(timer);
                    setToast('');
                    return 0;
                }
                return prev - 2;
            });
        }, 30);
    };


    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOption === 'size') return b.size - a.size;
        if (sortOption === 'downloads') return parseFloat(b.downloads) - parseFloat(a.downloads);
        return 0;
    });

    return (
        <div className='py-15 bg-[#d2d2d233] relative'>

            {toast && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 
                        bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg 
                        text-center z-50 w-[320px] border">
                    <p className="font-semibold">{toast}</p>
                    <div className="h-[4px] bg-gray-200 mt-2 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-red-500 transition-all duration-75"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className='text-center mb-8'>
                <h2 className='text-2xl font-bold mb-2'>Your Installed Apps</h2>
                <p className='text-gray-600'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className='flex justify-between items-center px-10 mb-6'>
                <h1 className='text-lg font-semibold text-gray-800'>
                    {installedApps.length} {installedApps.length === 1 ? 'App Found' : 'Apps Found'}
                </h1>

                <div className="flex items-center gap-2">
                    <label className='text-gray-600 text-sm'>Sort By</label>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className='border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none'
                    >
                        <option value="size">Size</option>
                        <option value="downloads">Downloads</option>
                    </select>
                </div>
            </div>


            <div className='space-y-4 px-10'>
                {sortedApps.length > 0 ? (
                    sortedApps.map(app => (
                        <div key={app.id} className='flex justify-between items-center bg-white p-4 rounded-lg shadow-sm'>
                            <div className='flex items-center gap-4'>
                                <img
                                    src={`/${app.image}`}
                                    alt={app.title}
                                    className='w-12 h-12 rounded-md bg-gray-200'
                                />
                                <div>
                                    <h2 className='font-semibold'>{app.title}</h2>
                                    <div className='flex justify-center items-center gap-6 text-sm text-gray-600 mt-1'>
                                        <span className='flex justify-center items-center'>
                                            <img className='w-3 mr-1' src={iconImg} alt="" /> {app.downloads}
                                        </span>
                                        <span className='flex justify-center items-center'>
                                            <img className='w-3 mr-1' src={iconImg2} alt="" /> {app.ratingAvg}
                                        </span>
                                        <span>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleUninstall(app.id)}
                                className='bg-[#00D390] font-semibold text-white px-4 py-1 rounded-md hover:bg-[#00b77b]'>
                                Uninstall
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No Installed Apps</p>
                )}
            </div>
        </div>
    );
};

export default Installation;
