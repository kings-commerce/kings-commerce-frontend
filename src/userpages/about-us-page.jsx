import React from "react";
import team from "../assets/team.png";
import Navbar from "./components/navbar";
import Card from "./components/services-card";
import windows from "../assets/windows.png";
import accessories from "../assets/accessories.png";
import computers from "../assets/computers.png";
import TeamCard from "./components/team-card";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import team2 from "../assets/team2.png";
import LogoBanner from "./components/sponserBanner";
import Footer from "./components/footer";

function About() {
  const CardInfo = [
    {
      title: "Windows Installations",
      logo: windows,
      desc: `At Kings Access we offer professional Windows installation services to ensure your devices are running the latest and most secure version of Windows. Whether you're setting up a new computer or upgrading an existing one, our expert technicians will handle the installation process from start to finish
       \nExpert Technicians: Our team has extensive experience with Windows installations, ensuring a smooth and hassle-free setup.
       \nUp-to-Date Software: We install the latest version of Windows, complete with all necessary updates and drivers.
       \nData Security: We take data security seriously, ensuring that your files and personal information are protected throughout the installation process.`,
    },
    {
      title: "Phone accessories",
      logo: accessories,
      desc: `We offer a wide range of high-quality phone accessories to enhance and protect your mobile devices.Whether you're looking for stylish cases, durable screen protectors, or high-performance chargers, we've got you covered.
      Why Choose Our Phone Accessories&quest;
      &bull; Extensive Selection: From trendy designs to essential gear, our collection includes everything you need to customize and safeguard your phone.\n &bull; Top Quality: We only stock accessories from reputable brands known for their durability and reliability, ensuring you get the best products available.\n &bull;Affordable Prices: Enjoy premium accessories without breaking the bank. We offer competitive pricing and frequent promotions to provide great value.`,
    },
    {
      title: "Computers",
      logo: computers,
      desc: "We provide a comprehensive range of computer solutions to meet all your personal and professional needs. Whether you're looking for a powerful desktop for your home office or a sleek laptop for on-the-go productivity, we have the perfect computer for you. \nWhy Choose Our Computer Solutions? \n &bull;Wide Range of Options: We offer a variety of computers from leading brands, including desktops, laptops, and custom-built PCs to suit every requirement and budget.&bull;High Performance: Our computers are equipped with the latest processors, ample memory, and high-speed storage to ensure smooth and efficient performance.",
    },
  ];

  const Team = [
    {
      img: profile1,
      name: "Abena Osei",
      desc: "I was hesitant to shop online, but this store changed my mind. The detailed product descriptions and reviews helped me make informed choices. ",
    },
    {
      img: profile2,
      name: "Akosua Prempeh",
      desc: "This store has a fantastic selection of products at great prices. I found exactly what I needed. The quality of the items exceeded my expectations. Highly recommend!",
    },
    {
      img: profile3,
      name: "Patricia Addo",
      desc: "This store has a fantastic selection of products at great prices. I found exactly what I needed. The quality of the items exceeded my expectations. Highly recommend!",
    },
  ];
  return (
    <div className="">
      {/* from us */}
      <section className="p-6 w-screen h-screen flex flex-col xs:flex-col sm:flex-row justify-center gap-20 items-center">
        {/* <div> */}
        <div>
          <img src={team} width={550} height={300} alt="delivery" />
        </div>
        <div className="flex-col items-center justify-between align-middle gap-10">
          <div>
            <span className="font-extra-thick font-montserrat text-primary-400 text-[60px] text-[#127816]">
              From your very own
            </span>
          </div>
          <div>
            <button className="btn px-5 py-3 rounded-[20px] font-montserrat self-center bg-primary-300 bg-[#39BC3E] text-white">
              Join the team
            </button>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* get to know us */}
      <section className=" w-screen h-full mb-20">
        <div className="bg-primary-300 py-[2px] w-[75%] mx-auto mb-[10px]"></div>
        <div className="font-montserrat ">
          <h1 className="text-primary-400 font-montserrat font-semibold m-5 text-3xl w-[90%] mx-auto mb-10">
            What We Offer
          </h1>
        </div>
        <div className=" mx-auto font-montserrat text-base w-[90%] flex flex-col justify-center gap-7 items-center align-middle">
          <p>
            Quality: We never compromise on quality. Each product is rigorously
            tested to ensure it meets our high standards. Innovation: We stay
            ahead of the curve by continuously updating our product range with
            the latest trends and technologies. Customer Focus: Our customers
            are at the heart of everything we do. Your feedback helps us improve
            and grow.
          </p>
          <p>
            Welcome , your one-stop destination for high-quality mobile
            accessories. Our journey began with a simple mission: to provide
            reliable, stylish, and affordable accessories that enhance your
            mobile experience
          </p>
          <p>
            Founded in 2020, we started as a small team of tech enthusiasts who
            saw a gap in the market for quality mobile accessories that didn't
            break the bank. Over the years, we've grown into a trusted brand,
            known for our commitment to excellence and customer satisfaction.
          </p>
        </div>
      </section>
      {/* our services */}
      <section className="w-[90%] mx-auto h-full">
        <div>
          <h1 className="text-primary-400 font-semibold font-montserrat text-3xl mb-10">
            Our Services
          </h1>
        </div>
        <div className="mx-auto">
          {CardInfo.map((service) => (
            <Card
              title={service.title}
              img={service.logo}
              desc={service.desc}
            />
          ))}
        </div>
      </section>
      <section className="w-[90%] mx-auto h-full my-20 content-center">
        <div>
          <h1 className="text-primary-400 font-semibold font-montserrat text-3xl mb-10">
            Get to know us
          </h1>
        </div>
        <div className="mx-auto flex flex-col justify-between gap-6 font-montserrat">
          <p>
            At King's Access, we believe that excellent customer service is the
            cornerstone of a great shopping experience. Our team is dedicated to
            providing you with the support and assistance you need, whenever you
            need it.
          </p>
          <p>
            Personalized Recommendations Not sure what you need? Our product
            experts are here to help. Based on your preferences and needs, we'll
            provide personalized recommendations to help you find the perfect
            accessories for your devices.
          </p>
        </div>
      </section>
      <section className="w-[90%] mx-auto h-full mb-20">
        <div>
          <h1 className="text-primary-400 font-semibold font-montserrat text-3xl mb-10">
            Meet some of our team
          </h1>
        </div>
        <div className="mx-auto flex flex-col my-auto sm:flex-row items-center">
          {Team.map((member) => (
            <TeamCard name={member.name} img={member.img} desc={member.desc} />
          ))}
        </div>
      </section>
      <section className="w-[90%] mx-auto h-sreen  flex flex-col justify-around items-center my-20 sm:flex-row content-center self-center font-montserrat gap-20">
        <div>
          <img src={team2} alt="team" />
        </div>
        <div className="mx-auto flex flex-col items-start">
          <span className="text-3xl text-primary-300 font-semibold w-[60%]">
            We are open to new members
          </span>
          <button className="bg-[#39BC3E] text-white rounded-3xl p-3 bg-primary-400 w-52 font-semibold text-2xl mt-6">
            Join the team
          </button>
        </div>
      </section>
      <section className="">
        <h1 className="w-[90%] mx-auto text-primary-400 font-semibold font-montserrat text-xl mb-10">
          Our sponsers
        </h1>
        <LogoBanner />
      </section>
    </div>
  );
}

export default About;
