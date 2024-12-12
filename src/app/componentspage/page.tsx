/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";

function ComponentsPage() {
  return (
    <>
      <div className=" relative w-[1080px] top-[220px] text-center flex justify-center items-center left-[250px]">
        <div className="w-full flex flex-col relative text-center  px-3  justify-center items-center ">
          <div className="w-full flex justify-center ">
            <h1 className="font-medium text-4xl text-[#101010]">
              Pixel-Perfect & Ready-to-Use Tailwind Components
            </h1>
          </div>

          <h4 className="font-light text-lg w-[780px] leading-8 tracking-tight text-center text-[#101010CC]  mt-10  ">
            Specifically designed for modern web projects! Our collection of
            Tailwind CSS elements includes components specifically crafted for
            SaaS, SPAs, dashboards, NFTs, and startup landing pages, ensuring a
            perfect fit for your projects needs.
          </h4>
        </div>
      </div>

      <BreadCrumbs />

      <div className="w-full mt-[300px] grid grid-cols-3">
        <div className="w-[416px] h-[750px] border-[2px] border-[#66A83A]  rounded-[40px] ml-[60px]  ">
          <div className=" px-[26px] py-[30px] ">
            <input
              type="text"
              placeholder="Search Components "
              className="font-medium text-2xl text-center  bg-[#66A83A] text-white hover: rounded-3xl w-[364px] h-[60px] placeholder-white sticky overflow-auto"
            />
          </div>
          <div className="  text h-auto sticky overflow-y-scroll max-h-[600px] ">
            <div className="grid grid-cols place-items-start px-10 gap-[28px]">
              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010]  font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="">All Components</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/tabel">Table</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010]  font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/hero">Hero</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/animation">Animation</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/pricing">Pricing</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/carousel">Carousel</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/timer">Timer</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/cta">CTA</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/form">Form</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/button">Button</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/credit card">Credit Card</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>

              <div className="group  ">
                <span className=" whitespace-nowrap text-[#10101099] hover:text-[#101010] font-Montserrat text-base lg:text-lg text-center font-semibold  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                  <a href="/card">Card</a>
                </span>
                <div className="h-[1px] w-[150px] group-hover:bg-[#000000] group-hover:opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[960px] h-[750px] border-[2px] border-[#66A83A] rounded-[40px] mb-[84px] pl-8 ">
          <div className="flex justify-between">
            <div className="group  h-auto pl-[51px] pt-[34px]">
              <span className=" whitespace-nowrap  font-Montserrat text-base lg:text-lg text-center font-medium  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                <a href="">All Components</a>
              </span>
              <div className="h-[2px] w-[150px] text-[#10180B] group-hover:bg-[#3C6724] group-hover:opacity-80"></div>
            </div>
            <div className=" flex justify-center px-10 pt-6 gap-3 items-center ">
              <div className="w-[78px] h-5 ">
                <select id="Rows">
                  <option selected>Rows</option>
                  <option>Cols</option>
                </select>
              </div>
              <div className="w-[78px] h-5">
                <label>
                  Sort by<select></select>
                </label>
              </div>
            </div>
          </div>

          <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 p-3 md:p-8 4xl:grid-cols-6 3xl:grid-cols-5">
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 110.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 111.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 112.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 107.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 108.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 109.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 104.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 105.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
            <div className="relative rounded-lg group-hover:scale-105 group-hover:duration-75">
              <img
                src="/comcard/Group 106.svg"
                className="w-[250px] h-[200px]"
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex justify-between gap-6 ">
              <a href="#">❮</a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">...</a>
              <a href="#">7</a>
              <a href="#">❯</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1300px] h-[190px] ml-[120px] bg-[#FCFFFA] border-2 border-[#3F6D26] rounded-[40px] mt-[84px] flex justify-between  ">
        <div className="flex justify-start ">
          <div className="w-full h-[116px] flex flex-col items-center py-[67px] pl-[80px]">
            <h1 className=" font-normal text-4xl">
              Check Out Our Latest Templates
            </h1>

            <h6 className=" text-[#10101099] underline font-medium text-xl mt-[10px] mb-[67px]">
              <a href="/templates">View All Template</a>
            </h6>
          </div>
        </div>
        <div className="w-[650px] h-[193px] flex justify-between items-center ">
          <div className="ml-[130px] flex flex-row gap-10 pr-10">
            <img src="/comcard/Group 218.svg " className="w-[220px]" />
            <img src="/comcard/Group 217.svg " className="w-[220px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentsPage;
