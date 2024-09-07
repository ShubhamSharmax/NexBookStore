import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Modal from './Modal';
import Login from './Login';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <div className='w-screen p-2 px-10 bg-gray-500 flex justify-between items-center fixed top-0 z-10'>
            <div className="nav-left">
                <h1 className='font-bold text-2xl text-white'><NavLink to="/">NexBookStore</NavLink></h1>
            </div>
            <div className="nav-right">
                <ul className='flex gap-4 justify-center items-center'>
                    <li><NavLink to="/" className={({ isActive }) =>
                        `text-white transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                    }>Home</NavLink></li>
                    <li><NavLink to="/books" className={({ isActive }) =>
                        `text-white transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                    }>Books</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) =>
                        `text-white transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                    }>About</NavLink></li>
                    <li className="relative flex items-center">
                        <input type="search" placeholder="Search" className="p-1 px-2 bg-gray-200 focus:outline-none rounded-l-md" />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-r-md">
                            <FaSearch />
                        </button>
                    </li>
                    <button className='bg-black text-white p-2 px-4 rounded-xl' onClick={() => setIsLoginOpen(true)}>Login</button>
                </ul>
            </div>
            <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                <Login setIsLoginOpen={setIsLoginOpen}/>
            </Modal>
        </div>
    );
}

export default Navbar;
