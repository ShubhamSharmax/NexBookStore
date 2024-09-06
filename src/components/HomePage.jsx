import React from 'react'
import BooksSlider from './FeaturedBooks';
import banner from '../assets/banner.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <div className="banner flex w-[98vw] h-[70vh]  m-auto  items-center mt-16 p-5">
        <div className="left w-1/2 pl-10">
            <h1 className='text-5xl'>Welcome to <span className='font-bold'>NexBookStore</span></h1>
            <p className='mt-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eaque fuga necessitatibus cum neque! Eius tenetur voluptatibus dolorum, magni quos saepe omnis molestias aliquam aperiam iste repellat in repellendus possimus voluptas quis quia atque eos aliquid natus sapiente perspiciatis velit? Hic consectetur earum quisquam aut modi tempore architecto pariatur voluptatibus cum tempora. Autem quasi distinctio eum.<span className='opacity-50'>.....</span></p>
            <button className='bg-transparent border-2 border-black rounded-lg p-2 px-4 mt-5'><NavLink to="/about">Learn More</NavLink></button>
        </div>
        <div className="right w-1/2 flex justify-center items-center">
            <img src={banner} alt="banner" className='w-[80%]'/>
        </div>
    </div>
    <BooksSlider />
    </>
  )
}

export default HomePage