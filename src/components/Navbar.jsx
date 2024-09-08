import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Modal from './Modal';
import Login from './Login';
import UserProfile from './UserProfile';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = JSON.parse(localStorage.getItem('User'));

    useEffect(() => {
        if (user && user.isUserLoggedIn) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoginOpen]);

    const handleLogOut = async () => {
        await localStorage.removeItem('User');
        setIsProfileOpen(false);
        setIsLoggedIn(false);
        toast.success('Logged out successfully');
    };
    return (
        <div className='w-screen p-4 px-14 bg-slate-200 flex justify-between items-center fixed top-0 z-10 shadow-lg font-modern'>
            <div className="nav-left">
                <h1 className='font-bold text-3xl text-slate-800'><NavLink to="/">NexBookStore</NavLink></h1>
            </div>
            <div className="nav-right">
                <ul className='flex gap-6 justify-center items-center'>
                    <NavLink to="/" className={({ isActive }) =>
                        `text-slate-700 transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                    }>Home</NavLink><NavLink to="/books" className={({ isActive }) =>
                        `text-slate-700 transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                    }>Books</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        `text-slate-700 transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                    }>About</NavLink>
                    <li className="relative flex items-center">
                        <input type="search" placeholder="Search" className="p-1 pl-4 pr-7 bg-slate-300 focus:outline-none rounded-xl active:bg-slate-200" />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2  px-1 rounded-r-md text-slate-600 hover:text-slate-800">
                            <FaSearch />
                        </button>
                    </li>
                    {isLoggedIn && <button className='bg-slate-800 hover:bg-slate-900 text-white p-2 px-5 rounded-xl font-bold' onClick={() => setIsProfileOpen(true)}>Profile</button>}
                    {!isLoggedIn && <button className='bg-slate-800 hover:bg-slate-900 text-white p-2 px-5 rounded-xl font-bold' onClick={() => setIsLoginOpen(true)}>Login</button>}
                </ul>
            </div>
            <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                <Login setIsLoginOpen={setIsLoginOpen} />
            </Modal>
            <Modal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
                <UserProfile user={user} handleLogOut={handleLogOut} />
            </Modal>
        </div>
    );
}

export default Navbar;
