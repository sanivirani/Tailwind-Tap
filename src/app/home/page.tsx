/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Carousel from "../components/Carousel";
import CarouselTwo from "../components/CarouselTwo";
import CarouselThree from "../components/CarouselThree";
import Link from "next/link";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function Home() {
  return (
    <>
      <ScrollToTop />
      <div className="">
        <img
          src="hideimage.png"
          alt="hidelogo  "
          className=" absolute right-0 top-48 h-[500px] w-[909px]"
        />
        <div className=" relative w-full h-[150px] ml-[120px] mt-[240px] ">
          <h1 className=" font-medium text-5xl mb-7">
            Continuous Stream of
            <span className=" text-[#71be3d]"> Tailwind </span>
            <span className="text-[#aad588]">CSS</span>
            <br />
          </h1>

          <h4 className="font-medium text-5xl"> Components and Templates!</h4>
        </div>

        <div className=" relative w-[650px]  h-[80px]  ml-[120px] mb-10 ">
          <p className=" font-light text-2xl">
            Enjoy pre-made royalty-free Tailwind CSS components and templates to
            build your unique website.
          </p>

          <Link href="componentspage">
            <button className=" bg-[#66A83A] text-white hover:bg-[#4c7c2c] px-4 py-2 rounded-lg font-semibold shadow transition duration-200 mt-6 mr-7 border-2">
              Browse Components
            </button>
          </Link>
          <Link
            href="https://discord.gg/RFVAXZqQwe"
            target={"_blank"}
            // alt="Join TailwindTap's Discord Community"
            title="Join TailwindTap's Discord Community"
          >
            <button className=" hover:bg-[#4c7c2c] text-[#66A83A] hover:text-white px-4 py-2  rounded-lg font-semibold shadow transition duration-200 mt-4 border border-[#66A83A]">
              Join Discord
            </button>
          </Link>

          <div className=" flex flex-wrap gap-5  mt-8">
            <div className="relative flex items-center gap-1.5">
              <img src="/html.svg" alt="html" className="block w-full h-auto" />
              <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="https://en.wikipedia.org/wiki/HTML">
                  <img
                    src="/htmlhover.svg"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"
                    title="HTML-Hayper Text Markup Language"
                  />
                </a>
              </div>
            </div>

            <div className="relative flex items-center gap-1.5">
              <img
                src="/react.svg"
                alt="react"
                className="block w-full h-auto"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="https://react.dev">
                  {" "}
                  <img
                    src="/reacthover.svg"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"
                    title="React - A Javascript Library building user interface"
                  />
                </a>
              </div>
            </div>

            <div className="relative flex items-center gap-1.5">
              <img src="/vue.svg" alt="Vue" className="block w-full h-auto" />
              <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="https://vuejs.org">
                  <img
                    src="/vuehover.svg"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"
                    title="VueJs - Progresive favascript framework"
                  />
                </a>
              </div>
            </div>

            <div className="relative flex items-center gap-1.5">
              <img
                src="/laravel.svg"
                alt="laravel"
                className="block w-full h-auto"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="https://laravel.com">
                  {" "}
                  <img
                    src="/laravelhover.svg"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"
                    title="Laravel - PHP framework for web artisans"
                  />
                </a>
              </div>
            </div>

            <div className="relative flex items-center gap-1.5">
              <img
                src="/tailwind.svg"
                alt="Tailwind"
                className="block w-full h-auto"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="https://tailwindcss.com">
                  {" "}
                  <img
                    src="/tailwindhover.svg"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"
                    title="Tailwind - Utility first css framework"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative">
          <div className=" w-[1045px] h-[150px] mt-[290px] ml-[120px] top-[998px]  ">
            <h1 className="font-medium text-4xl">
              Make it yours: Customize stunning Tailwind CSS components with
              ease.
            </h1>
            <p className="font-light text-2xl mt-10 mb-[64px] ">
              Skip the design grind! Copy and paste royalty-free
              <br /> Tailwind components to build beautiful websites, fast.
            </p>
          </div>

          <div className=" mt-32 flex justify-center ">
            <img
              src="big image.png "
              alt="bigiamge"
              className=" bg-gray-400 w-[900px] h-[500px] shadow-black rounded-lg "
            />
          </div>
        </div>

        <div className=" relative">
          <div className="mt-[130px] ml-[120px] ">
            <h1 className="font-medium text-4xl mb-10">
              Boost your workflow with beautiful, pre-built UI <br /> components
              for your next project.
            </h1>
            <p className="text-lg leading-9">
              Effortlessly build stunning UIs with hundreds of fully <br />
              customizable, pixel-perfect components.
            </p>
            <div className=" flex justify-start gap-[34px] mt-[88px] w-full ">
              <div className="group  ">
                <span className=" whitespace-nowrap  font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/Tabel">Table</a>
                </span>
                <div className="h-[2px] w-full group-hover:bg-green-700 group-hover:opacity-80"></div>
              </div>
              <div className="group ">
                <span className=" whitespace-nowrap font-Montserrat text-base lg:text-lg text-center font-semibold text-black opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8  duration-300">
                  <a href="/Animation">Animation</a>
                </span>
                <div className="h-[2px] w-full group-hover:bg-green-700 group-hover:opacity-80"></div>
              </div>
              <div className="group ">
                <span className=" whitespace-nowrap font-Montserrat text-base lg:text-lg text-center font-semibold text-black opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8  duration-300">
                  <a href="/Hero">Hero</a>
                </span>
                <div className="h-[2px] w-full group-hover:bg-green-700 group-hover:opacity-80"></div>
              </div>
              <div className="group ">
                <span className=" whitespace-nowrap font-Montserrat text-base lg:text-lg text-center font-semibold text-black opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8  duration-300">
                  <a href="/Carosel">Carosel</a>
                </span>
                <div className="h-[2px] w-full group-hover:bg-green-700 group-hover:opacity-80"></div>
              </div>
              <div className="group ">
                <span className=" whitespace-nowrap font-Montserrat text-base lg:text-lg text-center font-semibold text-black opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/Priceing">Pricing</a>
                </span>
                <div className="h-[2px] w-full group-hover:bg-green-700 group-hover:opacity-80"></div>
              </div>
              <div className="group ">
                <span className=" whitespace-nowrap font-Montserrat text-base lg:text-lg text-center font-semibold text-black opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/Timer">Timer</a>
                </span>
                <div className="h-[2px] w-full group-hover:bg-green-700 group-hover:opacity-80"></div>
              </div>
              <div className="group ">
                <span className=" whitespace-nowrap font-Montserrat text-base lg:text-lg text-center font-semibold text-black opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/Form">Form</a>
                </span>
                <div className="h-[2px] w-full group-hover:bg-green-700 group-hover:opacity-80"></div>
              </div>
              <div className="flex justify-end ml-[530px]">
                <Link href="componentspage">
                  <button className=" font-poppins bg-[#66A83A] hover:bg-[#4c7c2c] text-white   px-7 py-2  rounded-lg font-semibold shadow transition duration-200 ">
                    View All
                  </button>
                </Link>
              </div>
            </div>
            <Carousel />
          </div>
        </div>

        <div className="mt-[200px] ml-[90px] ">
          <div className="  w-[1500px] h-[200px]">
            <img src="Group all.png" className="h-[220px] w-[1350px] " />
          </div>
        </div>

        <div className=" relative ml-[120px] ">
          <div className="mt-[200px]">
            <h1 className="font-medium text-4xl mb-10">
              Craft your site, your way - choose from diverse <br />
              templates and customize to your brand.
            </h1>
            <p className="text-lg leading-9">
              No more blank canvas nightmares. Choose from an array of
              eye-catching <br /> landing page templates, optimized for
              conversions and tailored to your needs.
            </p>
          </div>

          <div className="flex justify-end mr-[150px]">
            <Link
              href="templates"
              // alt="Explore more Tailwind Templates"
              title="Explore more Tailwind Templates"
              className="font-semibold"
            >
              <button className=" font-poppins bg-[#66A83A] hover:bg-[#4c7c2c] text-white   px-7 py-2  rounded-lg font-semibold shadow transition duration-200 mb-10 ">
                View All
              </button>
            </Link>
          </div>

          <CarouselTwo />
        </div>

        <div className="w-[1300px] h-[190px] ml-[120px] bg-[#FCFFFA] border-2 border-[#3F6D26] rounded-[40px] mt-[80px]  flex flex-row ">
          <div className="w-[900px] h-[100px] my-[60px] ml-[60px] mr-7 ">
            <h1 className="font-medium text-3xl">
              Focus on your business, not the code.{" "}
            </h1>
            <h2 className="font-medium text-3xl">
              Hire dedicated Tailwind developers for faster results.
            </h2>
          </div>
          <div className="w-[300px] h-full  flex justify-center">
            <Link href="/hire-a-developer">
              <button className="font-poppins bg-[#66A83A] hover:bg-[#4c7c2c] text-white rounded-lg text-xl px-8  py-3 mt-[70px] ">
                Hire Now!
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="mt-[200px] ml-[120px] ">
            <h1 className="font-medium text-4xl mb-10">
              Level Up Your Tailwind Game: Resources to <br /> accelerate your
              development
            </h1>
            <p className="text-lg leading-9">
              Your secret weapon for Tailwind mastery. Unlock the power of{" "}
              <br />
              our resources and conquer the Tailwind world.
            </p>
          </div>

          <div className="flex justify-end mr-[100px]">
            <Link href="resources">
              <button className=" font-poppins bg-[#66A83A] hover:bg-[#4c7c2c] text-white   px-7 py-2  rounded-lg font-semibold shadow transition duration-200 mb-10 ">
                View All
              </button>
            </Link>
          </div>

          <CarouselThree />
        </div>

        <div className="">
          {" "}
          <div className="mt-[200px] ml-[120px] mb-20 ">
            <h1 className="font-medium text-4xl mb-10">
              How TailwindTap Will Help You
            </h1>
            <p className="text-lg leading-9">
              Stop coding, start creating! TailwindTap empowers you to build
              amazing websites, regardless of your <br /> experience. Explore
              our pre-made components and templates, customize freely with
              open-source <br /> code, and bring your website vision to life.
            </p>
          </div>
          <div className=" ml-[120px] mb-20 ">
            <h1 className="font-medium text-4xl mb-10">
              FAQ - Frequently Asked Question
            </h1>
            <p className="text-lg leading-9">
              FAQs to the rescue! Find quick answers to common questions and
              clear up any doubts. Still <br /> curious? Don't hesitate to reach
              out! We're happy to chat.
            </p>
          </div>
          <div className="w-[1300px] h-[1080px] mr-[120px] ml-[120px] ">
            <img src="/cards/Group 49.png" alt="FAQ" />
          </div>
        </div>

        <div className="w-[1300px] h-[190px] ml-[120px] bg-[#FCFFFA] border-2 border-[#3F6D26] rounded-[40px] flex justify-between mb-[200px] mt-[200px]  ">
          <h1 className=" font-medium text-3xl text-[#101010CC] w-[600px] h-[104px] mt-[50px] mb-[67px] ml-[50px] ">
            Unlock exclusive content and offers. Join our newsletter today!
          </h1>
          <form
            className="flex flex-col w-[543px] h-20 gap-[111px] "
            action="/submit-email"
            method="post"
          >
            <div className="w-full h-20 max-w-lg flex bg-[#F2F9EC] gap-2 py-2  mt-16 mb-[79px]  rounded-lg justify-between pl-2.5 pr-2 border-[1px] border-[#3F6D26]">
              <input
                type="email"
                className=" placeholder:focus:outline-none outline-none bg-transparent  !text-black text-2xl font-normal w-64 h-12 py-4 pl-[30px]  placeholder:text-[#10101080] "
                placeholder="Enter Your Email"

                // onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-[#66A83A] py-[11px] px-[18px] text-[#FFFCF9]  hover:bg-[#4c7c2c] shadow transition duration-200  rounded-lg w-[131px] h-[46px] mr-[15px]   "
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
