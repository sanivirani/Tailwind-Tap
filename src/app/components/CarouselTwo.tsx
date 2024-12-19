"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    img: `/cards/Group 62.png`,
  },

  {
    img: `/cards/Group 64.png`,
  },
];

const CustomRightArrow = ({ className, style, onClick }: any) => {
  return (
    <FaAngleRight
      className={`!text-[#66A83A] h-6 w-6 !right -mt-7   ${className}`}
      {...style}
      onClick={onClick}
    />
  );
};

const CustomLeftArrow = ({ className, style, onClick }: any) => {
  return (
    <FaAngleLeft
      className={`!text-[#66A83A] opacity-65 h-6 w-6 !left mr-9 -mt-7   ${className}`}
      {...style}
      onClick={onClick}
    />
  );
};

function CarouselTwo() {
  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };

  const handleClick = () => {};
  return (
    <div className="w-[1250px] h-[400px] mb-[200px]  ">
      <div className="">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className="rounded-xl h-[450px] p-7 " key={index}>
              <div className=" flex justify-center">
                <Link href="/templates" onClick={handleClick}>
                  <Image src={d.img} alt="" className="h-[380px] w-[650px] " />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselTwo;
