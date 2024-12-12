import React from "react";

function ContactUs() {
  return (
    <div>
      <div className=" mt-[220px] flex w-full flex-col">
        <div className="flex w-full items-center justify-center py-6 ">
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="font-medium text-5xl text-[#000000]">Contact US</h1>
            <div className=" w-[1054px] h-[93px] text-center text-2xl font-light text-[#10180BCC] leading-[31px] -tracking-normal">
              Share your feedback, questions, or just say hi - we're here to
              listen and help. Our dedicated team is passionate about providing
              exceptional support, so don't hesitate to reach out!
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-20 w-full mx-auto ">
        <div className="w-[1300px] h-[667px] rounded-[35px] border-[2px] border-[#3F6D2680] mx-[110px]">
          <div className="flex justify-center items-center mt-12 font-light text-xl text-[#10180BCC]">
            <p>
              Want to discuss custom options? Use the form below and we'll reply
              within 1 business day.
            </p>
          </div>
          <div className="flex flex-row justify-between gap-[122px] mt-14 mx-[110px] ">
            <div className="">
              <form className="flex flex-col gap-5">
                <div>
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="w-[350px] h-[50px] rounded-2xl  font-normal  py-2 pl-5 border-[2px] border-[#3F6D2680] bg-[#FCFFFA] placeholder:text-[#10180B66] outline-none "
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className=" w-[350px] h-[50px] rounded-2xl  font-normal  py-2 pl-5 border-[2px] border-[#3F6D2680] bg-[#FCFFFA] placeholder:text-[#10180B66] outline-none"
                  />
                </div>
                <div>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className=" w-[350px] h-[50px]  rounded-2xl  font-normal  py-2 pl-5 border-[2px] border-[#3F6D2680] bg-[#FCFFFA] placeholder:text-[#10180B66] outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className=" w-[350px] mx-h-[150px] rounded-2xl  font-normal  py-2 pl-5 border-[2px] border-[#3F6D2680] bg-[#FCFFFA] placeholder:text-[#10180B66] outline-none"
                  />
                </div>
                <div className="w-[350px] h-[50px]">
                  <button
                    className="font-medium py-[11px] px-[47px] rounded-lg bg-[#66A83A] hover:bg-[#437125] text-white transition duration-300 shadow-sm"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img src="blog/bgcontact.svg" />
            </div>
          </div>
        </div>
        <div className=" container mx-auto max-w-7xl mt-[60px] ">
          <div className="flex flex-row  w-full h-[50px] items-center ml-[50px] ">
            <span className="font-normal text-4xl mr-[120px] ">
              Contact Information
            </span>
            <a href="https://goo.gl/maps/YxSU1x7NxNmzVrDr6">
              <div className="flex items-center gap-2 mr-[60px]">
                <img src="contact-us/one.svg" className="w-[50px] h-[50px]" />
                <div>
                  <span className="font-normal text-2xl">Infynno</span>
                </div>
              </div>
            </a>
            <div className="flex items-center gap-2">
              <img src="contact-us/two.svg" className="w-[50px] h-[50px]" />
              <div>
                <span className="font-normal text-2xl mr-[60px]">
                  +91-848-883-8308
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="contact-us/three.svg" className="w-[50px] h-[50px]" />
              <div>
                <span className="font-normal text-2xl">
                  <a href="https://infynno.com">Infynno.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
