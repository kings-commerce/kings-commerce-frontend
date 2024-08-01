//images
import wirelessMouse from "../../assets/wirelessblack-mouse.svg";
import keyboard from "../../assets/keyboard-1.jpg";
import headset from "../../assets/headset.png";
import stickers from "../../assets/stickers.jpg";
import headset_1 from "../../assets/headset-1.svg";
import earpiece from "../../assets/earpiece.jpg";
import airpodsMax from "../../assets/airpods-max.webp";
import samDrive from "../../assets/sam-drive.jpeg";
import gamepad from "../../assets/gamepad.jpeg";
import blackPod from "../../assets/black-pod.svg";
import lapAccess from "../../assets/lap-access.jpg";
import headset_2 from "../../assets/headset_2.jpeg";
import keyboard_2 from "../../assets/keyboard_2.avif";
import review_1 from "../../assets/review_1.svg";
import review_2 from "../../assets/review_2.svg";
import review_3 from "../../assets/review_3.svg";

export const ProductService = {
  getProductsData() {
    return [
      {
        image: samDrive,
        name: "Sammung Pendrive",
        price: 60,
      },
      {
        image: headset_1,
        name: "Headset",
        price: 70,
      },
      {
        image: gamepad,
        name: "Game Pad",
        price: 80,
      },
      {
        image: airpodsMax,
        name: "Airpods Max",
        price: 80,
      },
      {
        image: earpiece,
        name: " G Shape Earpiece Headset",
        price: 60,
      },
    ];
  },
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
};

export const productData = [
  {
    name: "Dell wireless mouse",
    image: wirelessMouse,
    numberOfStars: 4,
    numSold: "10k",
    price: 100,
    strikedPrice: 120,
    isLarge: false,
  },
  {
    name: "Gaming Keyboard",
    image: keyboard,
    numberOfStars: 5,
    numSold: "20k",
    price: 150,
    strikedPrice: 180,
    isLarge: false,
  },
  {
    name: "Headset",
    image: headset,
    numberOfStars: 3,
    numSold: "50k",
    price: 100,
    strikedPrice: 110,
    isLarge: false,
  },
  {
    name: "Laptop Stickers",
    image: stickers,
    numberOfStars: 4,
    numSold: "100k",
    price: 15,
    strikedPrice: 25,
    isLarge: true,
  },
  {
    name: "G Shape Soft Ear Hook Earpiece Headset",
    image: earpiece,
    numberOfStars: 4,
    numSold: "10k",
    price: 90,
    strikedPrice: 100,
    isLarge: false,
  },
  {
    name: "Original Airpod Max",
    image: airpodsMax,
    numberOfStars: 5,
    numSold: "5k",
    price: 120,
    strikedPrice: 150,
    isLarge: true,
  },
  {
    name: "Samsung Pendrive",
    image: samDrive,
    numberOfStars: 4,
    numSold: "10k",
    price: 20,
    strikedPrice: 25,
    isLarge: false,
  },
  {
    name: "Game Pad",
    image: gamepad,
    numberOfStars: 5,
    numSold: "10k",
    price: 120,
    strikedPrice: 130,
    isLarge: true,
  },
  // {
  //   name: "Original Headset",
  //   image: headset_1,
  //   numberOfStars: 5,
  //   numSold: "10k",
  //   price: 120,
  //   strikedPrice: 130,
  // isLarge: false,
  // },
];

export const landingCarouselimgdata = [
  {
    label: "Dell Wireless Mouse",
    imgPath: wirelessMouse,
  },
  {
    label: "Get all your gaming accessories",
    imgPath: keyboard,
  },
  {
    label: "Quality Headsets",
    imgPath: headset,
  },
  {
    label: "Beautiful Laptop Stickers",
    imgPath: stickers,
  },
];

export const swiperTwoData = [
  {
    image: blackPod,
    btnText: "New Airpod",
    mainText: "Sales up to 10% off",
    subtext: "Noise Cancelation",
    position: "right",
  },
  {
    image: lapAccess,
    btnText: "New Airpod",
    mainText: "Sales up to 10% off",
    subtext: "Noise Cancelation",
    position: "left",
  },
];

export const categoryData = [
  {
    name: "Headsets",
    image: headset_2,
  },
  {
    name: "Keyboards",
    image: keyboard_2,
  },
];

export const reviews = {
  getProductsData() {
    return [
      {
        image: review_1,
        name: "Abena Osei",
        review:
          "I was hesitant to shop online, but this store changed my mind. The detailed product descriptions and reviews helped me make informed choices.",
      },
      {
        image: review_2,
        name: "Akosua Premper",
        review:
          "This store has a fantastic selection of products at great prices. I found exactly what I needed. The quality of the items exceeded my expectations. Highly recommend!",
      },
      {
        image: review_3,
        name: "Patricia Addo",
        review:
          "I was hesitant to shop online, but this store changed my mind. The detailed product descriptions and reviews helped me make informed choices.",
      },
    ];
  },
  getReviewSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
};
