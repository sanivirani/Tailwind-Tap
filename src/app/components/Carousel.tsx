'use client'

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const data = [
  {
    img: `/cards/Group 85.png`,
  },
  {
    img: `/cards/Group 86.png`,
  },
  {
    img: `/cards/Group 87.png`,
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

function Carousel() {
  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="w-[1300px] h-[284px] mt-10">
      <div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className="rounded-xl h-[350px]" key={index}>
              <div className="flex justify-center">
                <Link href="/componentspage" onClick={handleClick}>
                  <Image src={d.img} alt="" className="h-[284px] w-[400px]" />
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




// "use client";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { useState } from "react";
// const images = [
//   "https://www.tailwindtap.com/assets/components/simple-responsive-carousel/hill-lake.jpg",
//   "https://www.tailwindtap.com/assets/components/simple-responsive-carousel/plant.jpg",
//   "https://www.tailwindtap.com/assets/components/simple-responsive-carousel/supernatural.jpg",
//   "https://www.tailwindtap.com/assets/components/simple-responsive-carousel/valley.jpg",
// ];
// const Arrow = ({ arrowStyle }: any) => {
//   return (
//     <svg
//       width="16"
//       height="26"
//       viewBox="0 0 16 26"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={`cursor-pointer ${arrowStyle}`}
//     >
//       <path
//         d="M13.8462 2L2 13L13.8462 24"
//         stroke="#e2e8f0"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// };
// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const decreseIndex = () => {
//     if (currentIndex <= 0) {
//       setCurrentIndex(0);
//     } else setCurrentIndex(currentIndex - 1);
//   };
//   const increseIndex = () => {
//     if (currentIndex >= images.length - 1) {
//       setCurrentIndex(images.length - 1);
//     } else setCurrentIndex(currentIndex + 1);
//   };
//   return (
//     <>
//       <div className="min-h-screen w-full flex justify-center items-center bg-gray-300">
//         <div className="w-[1000px] relative">
//           <div
//             className="absolute inset-y-0 left-3 w-5 flex top-1/2 z-50"
//             onClick={decreseIndex}
//           >
//             <Arrow />
//           </div>
//           <div>
//             {images.map((img, index) => {
//               if (currentIndex === index) {
//                 return (
//                   <img
//                     key={index}
//                     src={img}
//                     alt="Different different images for carousel"
//                     className="object-cover w-full lg:max-h-[700px] sm:max-h-[500px] max-h-[400px]"
//                   />
//                 );
//               } else return null;
//             })}
//           </div>
//           <div
//             className="absolute inset-y-0 right-2 top-1/2 w-5 flex z-50"
//             onClick={increseIndex}
//           >
//             <Arrow arrowStyle="rotate-180" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React from "react";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";

// const data = [
//   {
//     img: `/cards/Group 85.png`,
//   },

//   {
//     img: `/cards/Group 86.png`,
//   },

//   {
//     img: `/cards/Group 87.png`,
//   },
// ];

// const CustomRightArrow = ({ className, style, onClick }: any) => {
//   return (
//     <FaAngleRight
//       className={`!text-[#66A83A] h-6 w-6 !right -mt-7   ${className}`}
//       {...style}
//       onClick={onClick}
//     />
//   );
// };

// const CustomLeftArrow = ({ className, style, onClick }: any) => {
//   return (
//     <FaAngleLeft
//       className={`!text-[#66A83A] opacity-40 h-6 w-6 !left mr-9 -mt-7   ${className}`}
//       {...style}
//       onClick={onClick}
//     />
//   );
// };

// function Carousel() {
//   const settings = {
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,

//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <CustomRightArrow />,
//     prevArrow: <CustomLeftArrow />,
//   };

//   const handleClick = () => {};
//   return (
//     <div className="w-[1300px] h-[284px] mt-10">
//       <div className="">
//         <Slider {...settings}>
//           {data.map((d, index) => (
//             <div className="rounded-xl h-[350px] ">
//               <div className=" flex justify-center ">
//                 <Link href="/componentspage" onClick={handleClick}>
//                   <Image src={d.img} alt="" className="h-[284px] w-[400px] " />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Carousel;
