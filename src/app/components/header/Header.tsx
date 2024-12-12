import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="w-[1600px] h-[100px] fixed top-0 left-0 right-0 z-30 backdrop-blur-md overflow-y-hidden"></div>
      <nav className="flex justify-between items-center w-[1408px] h-[90px] top-[50px] left-[60px] right-[60px] border rounded-2xl fixed bg-white drop-shadow-md backdrop-blur-md overflow-y-hidden shadow-slate-300 z-50 ">
        <div className=" flex items-center w-[250px] gap-5 h-10 ml-[30px] ">
          <Link href="http://localhost:3000/" className="flex items-center">
            <img
              src="logo.png"
              className="mr-5 h-10 w-10 rounded-md"
              alt="Tailwind Tap"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#101010]">
              Tailwind Tap
            </span>
          </Link>
        </div>
        <div className="mr-[30px] ">
          <ul className="flex items-center gap-10 text-2xl font-medium ">
            <li>
              <Link
                className="text-[#10180BB2] hover:text-black "
                href="/componentspage"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                className="text-[#10180BB2] hover:text-black"
                href="/templates"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                className="text-[#10180BB2] hover:text-black"
                href="/resources"
              >
                Resources
              </Link>
            </li>
            <li>
              <a className="text-[#10180BB2] hover:text-black" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-[#10180BB2] hover:text-black"
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
