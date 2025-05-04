import React from 'react';
import bookImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='lg:px-32 md:px-16 px-4 rounded-2xl py-6'>
            <div className="hero bg-base-200 md:h-96 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div>
                        <img
                            src={bookImg}
                            className="md:max-w-sm rounded-lg"
                        />
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className="md:text-5xl text-2xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                        <button className="btn bg-green-500 text-white font-bold mt-4">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;