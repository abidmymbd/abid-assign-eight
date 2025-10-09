import React from 'react';
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

    const { id } = useParams()
    const appid = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app => app.id === appid)

    const { title, image, companyName, downloads, ratingAvg, reviews, size, ratings, description } = singleApp

    return (
        <div className='bg-[#d2d2d233] py-10'>
            <div className='flex bg-white'>
                <div className='mr-20'>
                    <img src={`/${image}`} alt="AppImage1" />
                </div>
                <div>
                    <div className='mb-10'>
                        <h3 className='text-3xl font-bold mb-2'>{title}</h3>
                        <p >Developed By : <span className='text-[#773FE8]'>{companyName}</span> </p>
                    </div>
                    <div className='flex gap-20'>
                        <div>
                            <h1 className='text-gray-600'>Downloads</h1>
                            <p className='text-3xl font-bold'> {downloads} </p>
                        </div>
                        <div>
                            <h1 className='text-gray-600'>Average Ratings</h1>
                            <p className='text-3xl font-bold'> {ratingAvg} </p>
                        </div>
                        <div>
                            <h1 className='text-gray-600'>Total Reviews</h1>
                            <p className='text-3xl font-bold'> {reviews} </p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <a className='py-3 px-5 bg-[#00D390] rounded-lg text-white font-semibold' href="">Install Now ({size})</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full py-8">
                    <h2 className="text-2xl font-semibold mb-6"> Ratings </h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={ratings}
                            layout="vertical" 
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                            <XAxis type="number" /> 
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar
                                dataKey="count"
                                fill="#FF8811"
                                radius={[6, 6, 0, 0]}
                                barSize={40}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-6'>Description</h1>
                <p className='text-gray-500 text-justify'>{description}</p>
            </div>
        </div>


    );
};

export default AppDetails;