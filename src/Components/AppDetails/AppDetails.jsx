import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
    const { id } = useParams();
    const appid = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appid);

    const { title, image, companyName, downloads, ratingAvg, reviews, size, ratings, description } = singleApp;

    const [isInstalled, setIsInstalled] = useState(false);
    const [toast, setToast] = useState('');
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const installed = JSON.parse(localStorage.getItem('installedApps')) || [];
        const found = installed.some(app => app.id === singleApp.id);
        setIsInstalled(found);
    }, [singleApp.id]);

    const handleInstall = () => {
        const installed = JSON.parse(localStorage.getItem('installedApps')) || [];
        const isAlreadyInstalled = installed.some(app => app.id === singleApp.id);

        if (!isAlreadyInstalled) {
            installed.push(singleApp);
            localStorage.setItem('installedApps', JSON.stringify(installed));
            setToast(`${singleApp.title} installed successfully!`);
            setIsInstalled(true);
        } else {
            setToast(`${singleApp.title} is already installed.`);
        }

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

    return (
        <div className='bg-[#d2d2d233] py-10 relative'>

            {toast && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 
                        bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg 
                        text-center z-50 w-[320px] border">
                    <p className="font-semibold">{toast}</p>
                    
                    <div className="h-[4px] bg-gray-200 mt-2 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-green-500 transition-all duration-75"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className='flex bg-white p-6 rounded-lg shadow-sm'>
                <div className='mr-20'>
                    <img src={`/${image}`} alt="AppImage1" />
                </div>
                <div>
                    <div className='mb-10'>
                        <h3 className='text-3xl font-bold mb-2'>{title}</h3>
                        <p>Developed By : <span className='text-[#773FE8]'>{companyName}</span></p>
                    </div>

                    <div className='flex gap-20'>
                        <div>
                            <h1 className='text-gray-600'>Downloads</h1>
                            <p className='text-3xl font-bold'>{downloads}</p>
                        </div>
                        <div>
                            <h1 className='text-gray-600'>Average Ratings</h1>
                            <p className='text-3xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <h1 className='text-gray-600'>Total Reviews</h1>
                            <p className='text-3xl font-bold'>{reviews}</p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`py-3 px-5 rounded-lg text-white font-semibold transition 
                ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00b77b]'}`}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${size})`}
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full py-8'>
                <h2 className='text-2xl font-semibold mb-6'>Ratings</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ratings} layout="vertical" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FF8811" radius={[6, 6, 0, 0]} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div>
                <h1 className='text-2xl font-semibold mb-6'>Description</h1>
                <p className='text-gray-500 text-justify'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
