
import Link from "next/link";
import React from "react";
import Image from "next/image";

function BreadCrumbs() {
  return (
    <>
      {/* preview is a redirect home to tabel components and show all ready mate components to show and whole code */}
      <div className="mt-[220px] mx-[120px]">
        <div>
          <h1> using bread crumds path custom path here like</h1>
          <h2>home/ templates/ agency templates/ Chat GPT template</h2>
        </div>
      </div>

      <div className="w-full mt-[80px] grid grid-cols-3">
        <div className="w-[416px] h-[500px] rounded-[40px] ml-[60px]">
          <div className=" px-[26px] py-[10px] mb-5">
            <input
              type="text"
              placeholder="Search Templates "
              className="font-medium text-2xl text-center  bg-[#66A83A] text-white hover: rounded-3xl w-[364px] h-[60px] placeholder-white sticky overflow-auto"
            />
          </div>
          <div className="grid grid-cols place-items-start px-14 gap-[28px] mb-20">
            <div className="">
              <Image
                src="/BreadCrumbs/Vimg/Group 133.png"
                className="w-[300px] h-[200px]"
                alt="133"
              />
            </div>
            <div className="">
              <Image
                src="/BreadCrumbs/Vimg/Group 134.png"
                className="w-[300px] h-[200px]"
                alt="134"
              />
            </div>
            <div className="">
              <Image
                src="/BreadCrumbs/Vimg/Group 135.png"
                className="w-[300px] h-[200px]"
                alt="135"
              />
            </div>
          </div>
        </div>

        <div className="w-[960px] h-auto border-[2px] border-[#66A83A] rounded-[40px] mb-[80px] pl-8">
          <div className="flex justify-between">
            <div className="group  h-auto pl-[10px] pt-5">
              <span className=" whitespace-nowrap  font-Montserrat text-base lg:text-lg text-center font-medium  opacity-80 cursor-pointer md:flex md:items-center overflow-hidden h-8 duration-300">
                <a
                  href="/all components"
                  className="flex flex-row items-center text-2xl"
                >
                  ChatGPT Website{" "}
                  <span className="ml-3 text-base mt-1 mr-1">Share Link </span>
                  <span>
                    <Image src="preview/Share.png" alt="preview"/>
                  </span>{" "}
                </a>
              </span>
              <div className="h-[2px] w-[100px] text-[#10180B] group-hover:bg-[#3F6D26] group-hover:opacity-80"></div>
            </div>
            <div className=" flex flex-col justify-center  pr-10 pt-5 gap-1 items-end ">
              <div className="will-change-auto h-auto ">
                <label className=" text-[#10101099]">
                  Tailwind CSS Agency Templates
                </label>
              </div>
              <div className="will-change-auto h-auto justify-items-end">
                <label className="text-[#10101099] items-end">
                  18-April-2024
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="w-[800px] h-[80px] mx-[50px] mt-[40px] rounded-t-3xl bg-[#2F2E41] flex justify-between">
              <div className=" flex gap-5 pt-4 pl-10 font-semibold text-xs text-[#FFFFFF]">
                <div className="flex justify-evenly flex-row gap-5 items-baseline">
                  <div className="flex flex-col gap-2 items-center">
                    <Image src="preview/iPhone 14.png" className="w-7" alt="iphone"/>
                    <span>Mobile</span>
                  </div>

                  <div className="flex flex-col gap-2 items-baseline">
                    <Image src="preview/iPad Mini.png" className="w-9" alt="mini"/>
                    <span>Tablet</span>
                  </div>

                  <div className="flex flex-col gap-2  items-center">
                    <Image src="preview/Laptop.png" className="w-9" alt="laptop"/>
                    <span>Laptop</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-start w-[450px] h-auto mt-5 mr-10">
                <div className="flex flex-row items-center gap-5">
                  <div className="flex gap-1 flex-row rounded-3xl items-center ml-20 w-[180px] h-8 bg-white p-2">
                    <Image src="/preview/File Preview.png" alt="file preview"/>
                    <span>Preview</span>
                    <div className="bg-[#2F2E41] flex flex-row ml-2 pr-7 gap-1 text-white rounded-r-3xl">
                      <Image src="/preview/Code.svg" className="" alt="preview"/>
                      <span>Code</span>
                    </div>
                  </div>

                  <div className="flex flex-row bg-white items-center rounded-3xl">
                    <div className="w-[100px] h-8 bg-[#2F2E41] text-white rounded-3xl py-4 px-7 my-1 mx-1 pl-2 flex items-center justify-start ">
                      <span className="">React</span>
                      <span className="pl-2 ">
                        <Image src="/preview/Dropdown.svg" alt="dropdown"/>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image src="/preview/Download.png" className=" text-white" alt="download"/>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[800px] h-[450px] mx-[50px]  rounded-b-lg ">
              <Image
                src="/BreadCrumbs/Vimg/card-hover 1.png"
                className="flex justify-center"
                alt="card-hover"
              />
            </div>
            <div className="mx-[100px] items-center h-[180px] flex justify-center">
              <p className="font-light text-xl">
                Free responsive agency Tailwind CSS templates. ChatGPT Website
                website template built on top of Tailwind CSS and fully coded in
                ReactJs. Ready to use trending Tailwind CSS royalty-free website
                template specially for your next project. TailwindTap templates
                are designed to be responsive, flexible, and easy to customize.
              </p>
            </div>
            <div className="mt-10 ml-[50px] mb-10 group">
              <span className="font-medium text-2xl">Important Info.</span>
              <div className="h-[2px] w-[130px] group-hover:bg-[#3F6D26] group-hover:opacity-80"></div>
              <div className="pl-[50px] font-normal text-2xl mt-3 text-[#10180B] tracking-[3%]">
                <ul className="list-disc">
                  <li>Tailwind version : 3.2.7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[960px] h-auto mb-[84px] pl-8 ml-[500px] ">
        <div className="group  h-auto ml-[50px]">
          <span className=" text-2xl font-medium  text- cursor-pointer  overflow-hidden h-8 duration-300">
            <a href="/templates">Featured Template</a>
          </span>
          <div className="h-[2px] w-[150px] text-[#10180B] group-hover:bg-[#3F6D26] group-hover:opacity-80"></div>
        </div>

        <div className="flex flex-row gap-5 h-auto mt-5 w-[250px] mx-[60px]">
          <Image src="/preview/Group 143.png" alt="143"/>
          <Image src="/preview/Group 144.png" alt="144"/>
          <Image src="/preview/Group 145.png" alt="145"/>
        </div>
      </div>

      <div className="w-[960px] h-auto mb-[84px] pl-8 ml-[500px] ">
        <div className="group  h-auto ml-[50px]">
          <span className=" text-2xl font-medium  text- cursor-pointer  overflow-hidden h-8 duration-300">
            <a href="/componentspage">Must-Have Components</a>
          </span>
          <div className="h-[2px] w-[150px] text-[#10180B] group-hover:bg-[#3F6D26] group-hover:opacity-80"></div>
        </div>

        <div className="flex flex-row gap-5 h-auto mt-5 w-[250px] mx-[60px]">
          <Image src="/preview/Group 146.png" alt="146"/>
          <Image src="/preview/Group 147.png" alt="147"/>
          <Image src="/preview/Group 148.png" alt="148"/>
        </div>
      </div>

      <div className="w-[1300px] h-[190px] ml-[120px] bg-[#FCFFFA] border-2 border-[#3F6D26] rounded-[40px] mt-[80px]  flex flex-row ">
        <div className="w-[900px] h-[100px] my-[60px] ml-[60px] mr-7">
          <h1 className="font-medium text-3xl">
            Focus on your business, not the code.{" "}
          </h1>
          <h2 className="font-medium text-3xl">
            Hire dedicated Tailwind developers for faster results.
          </h2>
        </div>
        <Link href="/hire-a-developer">
          {" "}
          <div className="w-[300px] h-full  flex justify-center ">
            <button className="font-poppins bg-[#66A83A] hover:bg-[#4c7c2c] text-white rounded-lg text-xl px-8 my-[70px] ">
              Hire Now!
            </button>
          </div>
        </Link>
      </div>

      {/* preview section is the how image looks like it */}
    </>
  );
}

export default BreadCrumbs;
