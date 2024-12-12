"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-[120px]">
      <div className="mx-[120px] max-w-screen-2x ">
        <div className="mb-[50px] w-[250px]  ">
          <a href="http://localhost:3000/" className="flex items-center">
            <img
              src="logo.png"
              className="mr-5 h-10 w-10 rounded-md"
              alt="Tailwind Tap"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#101010]">
              Tailwind Tap
            </span>
          </a>
        </div>

        <div className="md:flex md:justify-between mb-[101px] ">
          <div className="w-[690px] h-[150px]">
            <p className=" font-light text-lg text-[#101010]">
              Thousands of developers have embraced the power of open-source
              with TailwindTap's free pre-made components and templates. This
              aligns perfectly with our team's ongoing commitment to creating
              and sharing valuable resources, fostering a thriving community of
              empowered developers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[109px]  text-end">
            <div>
              <ul className="text-[#101010] font-light">
                <li className="mb-6">
                  <Link href="/componentspage" className="">
                    Components
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/templates" className="">
                    Template
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/resources" className="">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className=" text-end text-[#101010] font-light ">
                <li className="mb-6 ">
                  <Link href="/hire-a-developer" className="">
                    Hire a developer
                  </Link>
                </li>
                <li className="mb-6 ">
                  <Link href="/contact-us" className="">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-6 ">
                  <Link href="/blog" className="">
                    Blog
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/release-notes" className="">
                    Release Notes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" sm:flex sm:items-center sm:justify-between mb-[120px]">
          <div className="w-[168px] h-[30px] flex gap-4 justify-start ">
            <a>
              <img src="instagram.svg" />
            </a>
            <a>
              <span>
                <img src="Twitter.svg" />
              </span>
            </a>
            <a>
              <span>
                <img src="Linkedin.svg" />
              </span>
            </a>
            <a>
              <span>
                <img src="Facebook.svg" />
              </span>
            </a>
          </div>
          <div className="">
            <span className="text-[#101010] font-normal">
              &copy; 2024 All rights reserved. TailwindTap by{" "}
              <a
                href="https://infynno.com/"
                className=" underline underline-offset-[3px] decoration-clone"
              >
                {" "}
                Sani Virani.
              </a>{" "}
              Made with ❤️.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/privacy-policy"
              className=" font-normal text-[#101010]"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className=" font text-[#101010]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
