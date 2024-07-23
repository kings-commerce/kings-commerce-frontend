import React from 'react';
import logos from '../assets/Logo.svg';
import home from '../assets/Home.svg';
import about from '../assets/About.svg';
import shop from '../assets/Shop.svg';
import contact from '../assets/Contact.svg';

import search from '../assets/Search.svg';
import cart from '../assets/Cart.svg';
import profile from '../assets/Profile.svg';
import HamburgerMenu from './Hamburger';



const Header = () => {
  return (
      

      <ul className='flex  flex-row justify-between items-center flex-wrap w-full md:w-auto mt-4 md:mt-0 md:px-20 px-8 md:py-5 py-2'>
        <li className='flex flex-col items-center mx-2'>
          <img src={logos} alt='logo' className='w-[120px] h-[120px]' />
        </li>    
        <li className='md:flex flex-col hidden items-center mx-2'>
          <img src={home} alt="home" className='w-[40px] h-[40px]' />
          <p className="mt-1 text-center">Home</p>
        </li>
        <li className='md:flex flex-col hidden items-center mx-2'>
          <img src={about} alt="about" className='w-[40px] h-[40px]' />
          <p className="mt-1 text-center">About Us</p>
        </li>
        <li className='md:flex flex-col hidden items-center mx-2'>
          <img src={shop} alt="services" className='w-[40px] h-[40px]' />
          <p className="mt-1 text-center">Services</p>
        </li>
        <li className='md:flex flex-col hidden items-center mx-2'>
          <img src={contact} alt="contact" className='w-[40px] h-[40px]' />
          <p className="mt-1 text-center">Contact</p>
        </li>
        <li className='md:flex flex-col hidden items-center mx-2'>
          <img src={search} alt="portfolio" className='w-[40px] h-[40px]' />
          <p className="mt-1 text-center">Search</p>
        </li>
        <li className='md:flex flex-col hidden items-center mx-2'>
          <img src={cart } alt="blog" className='w-[40px] h-[40px]' />
          <p className="mt-1 text-center">Cart</p>
        </li>
        <li className='md:flex flex-col hidden items-center mx-2'>
          <img src={profile} alt="team" className='w-[40px] h-[40px]' />
          <p className="mt-1 text-center">Profile</p>
        </li>
        
        <HamburgerMenu />
        
       
      </ul>
  );
}

export default Header;
