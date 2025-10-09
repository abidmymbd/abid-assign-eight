import React from 'react';
import iconImg from './fi_1828884.png'
import iconImg2 from './fi_9131795.png'

const App = ({ singleApp }) => {

    const { image, title, downloads, ratingAvg} = singleApp

    // console.log(singleApp)

    return (
        <div className="card bg-base-100 gap-5 shadow-sm">
            <figure>
                <img
                    className='bg-cover p-4'
                    src={ image }
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    { title }
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">
                        <img src={iconImg2} alt="" />
                        { downloads }
                    </div>
                    <div className="badge badge-outline">
                        <img src={iconImg} alt="" />
                        { ratingAvg }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;