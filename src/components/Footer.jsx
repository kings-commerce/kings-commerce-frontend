import React from 'react'
import logos from '../assets/Logo.svg';
import twitter from "../assets/Twitter.svg"
import facebook from '../assets/facebook.svg'
import insta from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between bg-[#EFEEEB] px-32 py-14'>
        <div className='flex flex-col pb-[30px]'>
            <h1 className='font-bold pb-[30px]'>Popular Categories </h1>
            <ul className='flex flex-col md:justify-start  justify-start md:items-start items-center'>
                <li>Windows Installations</li>
                <li>Computers</li>
                <li>Phone accessories</li>

            </ul>
        </div>
        <div className='flex flex-col pb-[30px] '>
            <h1 className='font-bold pb-[30px]'>Useful links</h1>
            <ul className='flex flex-col md:justify-start  justify-start md:items-start items-center'>
                <li>About us</li>
                <li>Services</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>


            </ul>
        </div>
        <div className='flex flex-col pb-[30px]'>
            <h1 className='font-bold pb-[30px]'>Customer care </h1>
            <ul className='flex flex-col  justify-start md:items-start items-center'>
                <li>Shoping cart</li>
                <li>Checkout</li>
                <li>Return policy</li>
                <li>Order tracking</li>

            </ul>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold '>Join the team </h1>
            <img src={logos} alt='logo' className='w-[88px] h-[88px]'/>
            <div className='flex flex-row space-x-4 items-center'>
                
                <img src={twitter} alt='logo' className='w-[30px] h-[30px]'/>
                <img src={facebook} alt='logo' className='w-[30px] h-[30px]'/>

                <img src={insta} alt='logo' className='w-[30px] h-[30px]'/>


            </div>
           
        </div>
      
    </div>
  )
}

export default Footer
