import React from "react";

function Blog() {
  return (
    <div>
      <div className=" mt-[220px] flex w-full flex-col">
        <div className="flex w-full items-center justify-center py-6 ">
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="font-medium text-5xl text-[#000000]">
              Tailwind CSS Blogs{" "}
            </h1>
            <div className=" w-[1054px] h-[93px] text-center text-2xl font-light text-[#10180BCC] leading-[31px] -tracking-normal">
              From basic to advanced, Tailwind Tap has you covered! Dive into
              our extensive library of tutorials and examples focusing on
              tables, forms, fonts, icons, z-index, and more. Master every
              aspect of Tailwind CSS and boost your design skills.
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="ml-[85px] grid gap-y-[60px] grid-cols-3 py-20">
            <img src="blog/Group 275.png" className="w-[400px] h-[500px]" />
            <img src="blog/Group 276.png" className="w-[400px] h-[500px]" />
            <img src="blog/Group 272.png" className="w-[400px] h-[500px]" />
            <img src="blog/Group 280.png" className="w-[400px] h-[500px]" />
            <img src="blog/Group 271.png" className="w-[400px] h-[500px]" />
            <img src="blog/Group 279.png" className="w-[400px] h-[500px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" mb- flex justify-between gap-6 ">
          <a href="#" className="text-[#adcc95]">
            ❮
          </a>
          <a href="#" className=" text-base">
            1
          </a>
          <a href="#" className=" text-base ">
            2
          </a>
          <a href="#" className=" text-base ">
            ...
          </a>
          <a href="#" className=" text-base ">
            6
          </a>

          <a href="#" className="text-[#3F6D26] border-[#3F6D26]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
