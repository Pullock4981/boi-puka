import React from 'react';

const NavBar = () => {
    const links = <>
        <li className='m-2 text-xl font-semibold'>Home</li>
        <li className='m-2 text-xl font-semibold'>Listed Books</li>
        <li className='m-2 text-xl font-semibold'>Pages to Read</li>
    </>


    return (
        <div>
            <div className="navbar lg:px-32 md:px-16 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-3xl text-xl font-bold">Boi Puka</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-green-500 text-white font-bold">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;