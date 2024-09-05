import React from 'react'
import { FaSearch } from 'react-icons/fa'


const Navbar = () => {
    return (
        <div className='Navbar w-screen p-2 bg-gray-500 flex justify-between items-center'>
            <div className="nav-left">
                <h1 className='font-bold text-2xl'>NexBookStore</h1>
            </div>
            <div className="nav-right">
                <ul className='flex gap-2 justify-center items-center'>
                    <li className='cursor-pointer hover:underline'>Home</li>
                    <li className='cursor-pointer hover:underline'>About</li>
                    <li className='cursor-pointer hover:underline'>Contact</li>
                    <li className='cursor-pointer hover:underline'>Books</li>
                    <li className="relative">
                        <input type="search" placeholder="Search" className="p-1 px-2 bg-gray-200 focus:outline-none"/>
                        <button><FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 " /></button>
                    </li>
                    <button className='bg-black text-white p-1 px-2 rounded-xl'>Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar