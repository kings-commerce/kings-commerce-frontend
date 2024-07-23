import React from 'react'
import Header from '../components/Header'
import ShopCard from '../components/ShopCard'
import book from '../assets/books.svg';
import Footer from '../components/Footer';
import watch from '../assets/watch.svg';
import headset from '../assets/headset.svg';
import phone from '../assets/phone.svg';

const ShopPage = () => {
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='flex flex-wrap gap-14 px-20 pt-14'>
            <ShopCard imageSrc={book} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
            <ShopCard imageSrc={watch} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
            <ShopCard imageSrc={phone} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
            <ShopCard imageSrc={headset} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
            <ShopCard imageSrc={watch} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
            <ShopCard imageSrc={book} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
            <ShopCard imageSrc={phone} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
            <ShopCard imageSrc={headset} altText="home" label="Elegant Timepieces for Every Occasion" price="Price: $199.99" />
        </div>
        <div className='mt-24'>
            <Footer/>
        </div>
    </div>
  )
}

export default ShopPage
