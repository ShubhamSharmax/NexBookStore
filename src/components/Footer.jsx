import React from 'react';
import { NavLink } from 'react-router-dom';
import githubIcon from '../assets/socialIcons/github.svg';
import linkedinIcon from '../assets/socialIcons/linkedin.svg';
import instagramIcon from '../assets/socialIcons/instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className='Footer bottom-0 w-full h-[20vh] text-center bg-slate-200 p-2 flex items-center text-slate-900 cursor-default'>
        <div className='w-1/2'>
        <NavLink to="/"className="text-2xl font-bold">NexBookStore</NavLink>
          <h1 className="text-sm text-slate-500">&#169;2024 All rights reserved.</h1>
          <h1 className="text-lg text-slate-700 font-semibold">Created By : Shubham Sharma</h1>
        </div>
        <div className="w-1/2">
          <h1 className="text-lg font-semibold mb-2">- Connect with us -</h1>
          <div className="flex justify-center items-center gap-8">
            <a href="https://github.com/ShubhamSharmax">
              <img src={githubIcon} alt="GitHub" className="h-12 hover:scale-125 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/shubham-sharma02/">
              <img src={linkedinIcon} alt="LinkedIn" className="h-12 hover:scale-125 transition-transform" />
            </a>
            <a href="https://www.instagram.com/shubham.sharma02/">
              <img src={instagramIcon} alt="Instagram" className="h-12 hover:scale-125 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer