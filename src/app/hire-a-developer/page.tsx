/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function HireADeveloper() {
  return (
    <div>
      <div className=" mt-[220px] flex w-full flex-col">
        <div className="flex w-full items-center justify-center py-6 ">
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="font-medium text-5xl text-[#000000]">
              Hire a Developer
            </h1>
            <div className=" w-[1054px] h-[93px] text-center text-2xl font-light text-[#10180BCC] leading-[31px] -tracking-normal">
              Our experienced developers seamlessly integrate with your existing
              workflow, adapting to your specific development practices.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[700px] -left-9 mt-20 bg-[#FCFFFAB2] ">
        <div className="w-full h-[800px] my-[100px] pl-[156px]">
          <div className="flex  justify-between ">
            <div className="w-[596px] h-[836px]">
              <div className="mb-10">
                <span className="font-medium text-4xl">Why Us?</span>
              </div>
              <div className="pl-10">
                <ul className=" list-disc items-center">
                  <li className="font-normal text-2xl text-[#10180B] tracking-wide">
                    We offer flexible, scalable development services with expert
                    teams in your time zone, transparent processes, open
                    communication, cutting-edge technology, and prioritize
                    security and confidentiality.
                  </li>
                  <li className="font-normal text-2xl text-[#10180B] mt-10 tracking-wide">
                    Our technology expertise includes PHP Laravel, Wordpress,
                    E-commerce/CMS development, SAAS development, and API
                    development.
                  </li>
                  <li className="font-normal text-2xl text-[#10180B] mt-10 tracking-wide">
                    Our developers possess strong technical proficiency,
                    experience with diverse web frameworks, excellent
                    communication, independent work capabilities, motivation,
                    and a track record of success.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[450px] h-[150px] mt-[150px] mr-[197px] ml-[150px]">
              <img src="/hire/sideimg.png" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[676px] ml-[150px] ">
        <div className="mb-[70px]">
          <h2 className="font-medium text-4xl mb-[30px]">
            Experienced Tailwind CSS Team on Upwork
          </h2>
          <div className="w-[1000px] h-[62px]">
            {" "}
            <p className="font-normal text-2xl">
              Hire our expert Tailwind CSS developers on Upwork – with years of
              experience building complex web applications, mobile apps, and
              software projects.
            </p>
          </div>
        </div>
        <div className="h-[470px] flex gap-5">
          <img src="/hire/Group 231.svg" className="w-[300px] h-[400px]" />
          <img src="/hire/Group 232.svg" className="w-[300px] h-[400px]" />
          <img src="/hire/Group 233.svg" className="w-[300px] h-[400px]" />
          <img src="/hire/Group 234.svg" className="w-[300px] h-[400px]" />
        </div>
      </div>
      <div className="mt-[120px] w-full h-[576px] flex justify-center">
        <div className="mr-[90px] ">
          <img src="/hire/fimg.png" className="w-[500px] h-[450px]" />
        </div>
        <div className="flex flex-col mt-[90px] gap-10">
          <h3 className="font-medium text-4xl">
            Achieve Greatness Through Teamwork
          </h3>
          <div className="w-[600px] h-[100px] ">
            <p className="font-normal text-2xl leading-8 text-[#000000] mb-[60px]">
              Need a mobile presence that makes an impact? We build brands and
              apps designed for success. Partner with us for the best results.
            </p>
          </div>
          <div className="w-full">
            <Link href="/contact-us">
              <button className="bg-[#66A83A] hover:bg-[#437125] transition duration-300 shadow-sm py-5 px-28 rounded-2xl font-medium text-3xl text-white">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-auto h-[625px] ml-[120px] mr-[120px]">
        <div className="flex flex-col justify-center h-[372px] bg-[#E3F2D5] rounded-[30px] z-0">
          <div className=" flex justify-center mt-[250px]">
            <h1 className="font-medium text-4xl">What's Next ?</h1>
          </div>
          <div className=" flex flex-row justify-center gap-[60px] z-10 ml-12 mx-[60px] mt-[60px] ">
            <button>
              <img src="hire/Group 223.png" className="w-[350px] h-[400px]" />
            </button>
            <button>
              <img src="hire/Group 222.png" className="w-[350px] h-[400px]" />
            </button>
            <button>
              <img src="hire/Group 224.png" className="w-[350px] h-[400px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireADeveloper;
