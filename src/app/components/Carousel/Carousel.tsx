'use client'

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


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
  
  function Carousel({ data, width, height, slidesToShow = 3 }: any) {
    const settings = {
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      nextArrow: <CustomRightArrow />,
      prevArrow: <CustomLeftArrow />,
    };
  
    const handleClick = () => {};
  
    return (
      <div className={`w-[${width}] h-[${height}] mt-10`}>
        <div>
          <Slider {...settings}>
            {data.map((d: any, index: number) => (
              <div className="rounded-xl h-[350px]" key={index}>
                <div className="flex justify-center">
                  <Link href="/componentspage" onClick={handleClick}>
                    <Image src={d.img} alt="" className={`h-[${height}] w-full`}  />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  
  export default Carousel;













