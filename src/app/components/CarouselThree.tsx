"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const data = [
  {
    img: `/cards/Group 17.png`,
  },

  {
    img: `/cards/Group 18.png`,
  },

  {
    img: `/cards/Group 19.png`,
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
      className={`!text-[#66A83A] opacity-40 h-6 w-6 !left mr-9 -mt-7   ${className}`}
      {...style}
      onClick={onClick}
    />
  );
};

function CarouselThree() {
  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };

  const handleClick = () => {};
  return (
    <div className="w-[1300px] h-[284px] ml-[100px]">
      <div className="">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="rounded-xl h-[350px] ">
              <div className=" flex justify-center ">
                <Link href="/resources" onClick={handleClick}>
                  <img src={d.img} alt="" className="h-[284px] w-[400px] " />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselThree;
