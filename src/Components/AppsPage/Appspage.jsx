import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import searchImg from './fi_54481.png'
import iconImg from './fi_1828884.png'
import iconImg2 from './fi_9131795.png'

const Appspage = () => {

    const data = useLoaderData()

    // console.log(data)

    const [searchItem, setSearchItem] = useState('');
    const [filteredApps, setFilteredApps] = useState(data);

    useEffect(() => {
        const filtered = data.filter(app =>
            app.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredApps(filtered);
    }, [searchItem, data]);



    return (
        <div className='py-15 bg-[#d2d2d233]'>

            <div className='text-center mb-5'>
                <h1 className='text-3xl font-bold text-center mb-3'>Our All Applications</h1>
                <p className='text-gray-600' >Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='my-3 flex justify-between items-center'>
                <h1 className='font-semibold'>({data.length}) Apps Found</h1>
                <div className='flex justify-items-start items-center border-1 border-gray-400 rounded-lg p-1'>
                    <img className='mx-5 h-4 w-4 ' src={searchImg} alt="" />
                    <input
                        type='text'
                        placeholder='Search Apps'
                        className='text-gray-600 bg-transparent outline-none pr-20'
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <Suspense fallback={<span>Loading....</span>}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {filteredApps.length > 0 ? (
                            filteredApps.map((singleApp) => (
                                <Link to={`/appDetails/${singleApp.id}`}>
                                    <div
                                        key={singleApp.id}
                                        className="card bg-base-100 gap-5 shadow-sm hover:shadow-md transition">
                                        <figure>
                                            <img
                                                className="bg-cover p-4"
                                                src={singleApp.image}
                                                alt={singleApp.title} />
                                        </figure>

                                        <div className="card-body">
                                            <h2 className="card-title">{singleApp.title}</h2>

                                            <div className="card-actions justify-between">
                                                <div className="badge badge-outline flex items-center gap-1">
                                                    <img className="w-3 h-3" src={iconImg2} alt="downloads" />
                                                    {singleApp.downloads}
                                                </div>

                                                <div className="badge badge-outline flex items-center gap-1">
                                                    <img className="w-3 h-3" src={iconImg} alt="rating" />
                                                    {singleApp.ratingAvg}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="col-span-4 text-center text-gray-500 mt-10 text-lg font-medium">
                                No App Found
                            </p>
                        )}
                    </div>

                </Suspense>

            </div>
        </div>
    );
};

export default Appspage;