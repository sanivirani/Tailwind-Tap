
import React from "react";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <>
      <div className=" relative w-[1080px] top-[220px] text-center flex justify-center items-center left-[250px]">
        <div className="w-full flex flex-col relative text-center  px-3  justify-center items-center ">
          <div className="w-full flex justify-center ">
            <h1 className="font-medium text-5xl text-[#101010]">
              Resources to accelerate your development
            </h1>
          </div>

          <h4 className="font-light text-xl w-[780px] leading-8 tracking-tight text-center text-[#101010CC]  mt-10  ">
            Stay ahead of the Tailwind curve! Dive into our extensive library of
            resources and get instant insights into the latest
            updates, features, and community trends. Never miss a beat in the
            ever-evolving world of Tailwind CSS.
          </h4>
        </div>
      </div>
      <div className="w-full mt-[300px] grid grid-cols-3">
        <div className="w-[416px] h-[380px] border-[2px] border-[#66A83A]  rounded-[40px] ml-[60px]  ">
          <div className=" px-[26px] py-[20px] ">
            <input
              type="text"
              placeholder="Search Resources "
              className="font-medium text-2xl text-center  bg-[#66A83A] text-white hover: rounded-3xl w-[364px] h-[60px] placeholder-white sticky overflow-auto"
            />
          </div>
          <div className="grid grid-cols place-items-start px-10 gap-[28px] mb-20">
            <div className="group  ">
              <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010]  font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                <a href="/all resources">HyperColor</a>
              </span>
              <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
            </div>

            <div className="group  ">
              <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                <a href="/tabel">Icon Playground</a>
              </span>
              <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
            </div>

            <div className="group  ">
              <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010]  font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                <a href="/hero">Tailwind CSS Maker</a>
              </span>
              <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
            </div>

            <div className="group  ">
              <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                <a href="/animation">Tailwind Pallet Builder</a>
              </span>
              <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
            </div>
          </div>
        </div>

        <div className="w-[950px] h-auto border-[2px] border-[#66A83A] rounded-[40px] mb-[84px] pl-8">
          <div className="flex justify-between">
            <div className="group  h-auto pl-[10px] pt-5">
              <span className=" whitespace-nowrap  font-Montserrat text-base lg:text-lg text-center font-medium  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                <a href="/all components">
                  HyperColor - Make Dynamic Gradients
                </a>
              </span>
              <div className="h-[2px] w-[100px] text-[#10180B] group-hover:bg-[#3F6D26] group-hover:opacity-80"></div>
            </div>
            <div className=" flex flex-col justify-center  pr-10 pt-5 gap-1 items-end ">
              <div className="will-change-auto h-auto ">
                <label className=" text-[#10101099]">
                  Color Gradient Resource
                </label>
              </div>
              <div className="will-change-auto h-auto justify-items-end">
                <label className="text-[#10101099] items-end">
                  18-April-2024
                </label>
              </div>
            </div>
          </div>

          <div className="w-[700px] h-[300px] mt-[94px] mx-[150px] mb-20">
            <Image src="resource/image 1.png" className="h-[300px] w-[600px]" alt="1"/>
          </div>

          <div className=" relative w-auto h-32  px-[70px] mb-10">
            <p className=" font-light text-xl ">
              Simplify your gradient game with Hypercolor! This powerful tool
              seamlessly integrates with Tailwind CSS, offering effortless
              creation of unique gradients that enhance your design&apos;s depth and
              vibrancy. Discover its wonders and elevate your projects in this
              insightful post!
            </p>
          </div>

          <div className=" relative w-auto h-auto px-[70px] mb-20">
            <div className="mb-7">
              <span className="font-light text-xl">
                Benefits of Hypercolor:
              </span>
            </div>

            <div className="pl-8">
              {" "}
              <ul className=" list-disc">
                <li className="font-medium text-[#101010] mb-6">
                  Rich Gradient Styles:
                  <span className="font-light">
                    To meet different design needs, Hypercolor offers a wide
                    variety of gradient types. This website has a large
                    selection of pre-designed gradient classes, ranging from
                    soft, minimalistic gradients to strong, vivid colour
                    transitions. Hypercolor can provide you with either a smooth
                    pastel gradient or a dynamic radial transition as well.
                  </span>
                </li>
                <li className="font-medium text-[#101010] mb-6">
                  Easily Copy Gradient CSS:
                  <span className="font-light">
                    You can copy your custom gradient CSS in tailwind CSS and or
                    in plain CSS.
                  </span>
                </li>
                <li className="font-medium text-[#101010] mb-6">
                  Customization Options:
                  <span className="font-light">
                    hypercolor.dev provides all customization options, You can
                    customize gradient colours in all possible directions,
                    conical direction and radial directions.
                  </span>
                </li>
                <li className="font-medium text-[#101010] mb-6">
                  Developer-Friendly Preview:
                  <span className="font-light">
                    Developer can easily able to show the preview by changing
                    gradient shade to all direction. It will help developer to
                    visualize output and you can customize your gradient as
                    well. It will shows you how your gradient will look like and
                    how text is looks above that gradient.
                  </span>
                </li>
                <li className="font-medium text-[#101010]">
                  Image Download:
                  <span className="font-light">
                    You can download image of gradient if you want to put in any
                    specific location or place. it will also provide you flags&apos;
                    css and images of all country as well
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[700px] h-[300px] mx-[150px] mb-10">
            <Image src="resource/image 3.png" className="h-[300px] w-[600px]" alt="3"/>
          </div>
          <div className=" flex justify-center w-auto mt-10 mb-10">
            <button className=" hover:bg-[#4c7c2c] text-[#66A83A] hover:text-white text-xl px-6 py-3  rounded-2xl font-normal shadow transition duration-300  border-[2px] border-[#66A83A]">
              Visit HyperColor.dev
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1300px] h-[190px] ml-[120px] bg-[#FCFFFA] border-2 border-[#3F6D26] rounded-[40px] mt-[80px]  flex flex-row ">
        <div className="w-[900px] h-[100px] my-[60px] ml-[60px] mr-7 ">
          <h1 className="font-medium text-3xl">
            Focus on your business, not the code.{" "}
        </h1>
        <h2>
            Hire dedicated Tailwind developers for faster results.
          </h2>
          
        </div>
        <div className="w-[300px] h-full  flex justify-center ">
          <button className="font-poppins bg-[#66A83A] hover:bg-[#4c7c2c] text-white rounded-lg text-xl px-8 my-[70px] ">
            Hire Now!
          </button>
        </div>
      </div>
    </>
  );
}

export default page;
