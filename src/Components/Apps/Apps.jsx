import React, { Suspense } from 'react';
import App from './App';

const Apps = ({ data }) => {


    return (
        <div>

            <div className='py-15'>

                <h1 className='text-3xl font-bold text-center my-5'>Trending Apps</h1>
                <h1 className='text-center mb-10'>Explore All Trending Apps on the Market developed by us</h1>

                <Suspense fallback={<span>Loading....</span>}>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
                        {
                            data.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
                        }
                    </div>
                </Suspense>

                <div className="text-center pt-10">
                    <a href="/apps"
                        className="btn bg-gradient-to-t from-purple-500 to-purple-700 text-white">Show All</a>
                </div>

            </div>

        </div>
    );
};

export default Apps;