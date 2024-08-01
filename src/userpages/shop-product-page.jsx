import React from "react";
import ShopCard from "./components/ShopCard";
import book from "../assets/books.svg";
import watch from "../assets/watch.svg";
import phone from "../assets/phone.svg";

const ShopProductPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-14 px-20 pt-14">
        <ShopCard
          imageSrc={book}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
        <ShopCard
          imageSrc={watch}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
        <ShopCard
          imageSrc={phone}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
        <ShopCard
          imageSrc={phone}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
        <ShopCard
          imageSrc={watch}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
        <ShopCard
          imageSrc={book}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
        <ShopCard
          imageSrc={phone}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
        <ShopCard
          imageSrc={phone}
          altText="home"
          label="Elegant Timepieces for Every Occasion"
          price="Price: $199.99"
        />
      </div>
      <div className="mt-24"></div>
    </div>
  );
};

export default ShopProductPage;
