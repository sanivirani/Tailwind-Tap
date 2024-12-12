import React from "react";

function page() {
  return (
    <div className=" container mt-[220px]">
      <div className="flex justify-center mb-20">
        <h1 className="font-medium text-5xl">Privacy Policy</h1>
      </div>

      <div className="h-[2700px] bg-[#fffff7] mx-[162px] rounded-2xl drop-shadow-2xl border ">
        <div className="flex flex-col gap-10 px-20 mt-[60px]">
          <p className="font-medium text-2xl tracking-[3%] leading-[30px] ">
            Effective Date:
            <span className=" text-2xl font-[275]"> September 1, 2023</span>
          </p>
          <p className="text-2xl font-[275] tracking-[3%] leading-[30px]">
            Welcome to&nbsp;
            <a href="https://www.tailwindtap.com/" className=" underline">
              {" "}
              TailwindTap.com
            </a>
            (referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            At TailwindTap, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and protect your
            information when you visit our website and use our services.
          </p>
          <p className="text-2xl font-[275] tracking-[3%] leading-[30px]">
            By accessing or using&nbsp;
            <a href="https://www.tailwindtap.com/" className="underline">
              TailwindTap.com
            </a>
            , you consent to the practices described in this Privacy Policy. If
            you do not agree with the terms of this policy, please do not use
            our website or services.
          </p>

          <div className="flex flex-col gap-10 mt-10">
            <h2 className="font-medium text-2xl ">Information We Collect</h2>
            <ol className="list-decimal flex flex-col gap-10 pl-10">
              <li className="font-[275] text-2xl leading-[30px] tracking-[3%]">
                {" "}
                Personal Information : We may collect personal information, such
                as your name, email address, and contact information when you
                provide it to us through forms on our website or when you
                contact us for support or inquiries.
              </li>
              <li className="font-[275] text-2xl leading-[30px] tracking-[3%]">
                {" "}
                Usage Information : We collect information about your use of our
                website and services, including your IP address, browser type,
                device information, and pages visited. This information helps us
                improve our website and customize your experience.
              </li>
              <li className="font-[275] text-2xl leading-[30px] tracking-[3%]">
                {" "}
                Cookies and Tracking Technologies : We use cookies and similar
                tracking technologies to collect information about your browsing
                behavior and preferences. You can manage your cookie preferences
                through your browser settings.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-10 mt-10 ">
            <h2 className="font-medium text-2xl">
              {" "}
              How We Use Your Information
            </h2>
            <p className="font-[275] text-2xl leading-[30px] tracking-[3%]">
              We use the information we collect for the following purposes:
            </p>

            <ol className="list-decimal flex flex-col gap-10 pl-10 font-[275] text-2xl leading-[30px] tracking-[3%]">
              <li className="">
                {" "}
                Provide Services : To provide you with the services you request,
                such as access to our HTML, React, VueJs, and Laravel templates
                and components.
              </li>
              <li>
                Communications : To communicate with you, respond to your
                inquiries, and send you important updates, promotions, or
                newsletters if you have subscribed to them.
              </li>
              <li>
                Analytics : To analyze user behavior and improve our
                website&apos;s functionality and user experience.
              </li>
              <li>
                Security : To protect our website and services from fraud,
                abuse, and security threats.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <h2 className="font-medium text-2xl">Your Choice</h2>
            <p className="font-[275] text-2xl  leading-[30px] tracking-[3%]">
              You have the following rights regarding your personal information:
            </p>

            <ol className="list-decimal flex flex-col gap-10 pl-10 font-[275] text-2xl leading-[30px] tracking-[3%]">
              <li>
                {" "}
                Access and Update : You can access, update, or correct your
                personal information by contacting us.
              </li>
              <li>
                Marketing Communications : You can opt-out of receiving
                marketing communications from us by following the unsubscribe
                instructions in our emails or contacting us.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <h2 className="font-medium text-2xl">Security</h2>
            <p className="font-[275] text-2xl leading-[30px] tracking-[3%]">
              We take reasonable measures to protect your information, but
              please be aware that no data transmission over the internet is
              completely secure. We cannot guarantee the security of your
              information.
            </p>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <h2 className="font-medium text-2xl">
              Changes to this Privacy Policy
            </h2>
            <p className="font-[275] text-2xl leading-[30px] tracking-[3%]">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any significant changes
              by posting the revised Privacy Policy on our website.
            </p>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <h2 className="font-medium text-2xl"> Contact Us</h2>
            <p className="font-[275] text-2xl leading-[30px] tracking-[3%]">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal information, please contact us at
              &nbsp;
              <a href="mailto: tailwindtap@gmail.com" className="underline">
                tailwindtap@gmail.com
              </a>
            </p>
            <p className="font-[275] text-2xl leading-[30px] tracking-[3%]">
              We are dedicated to providing you with the best web development
              resources while safeguarding your privacy. &nbsp;
              <a href="mailto: tailwindtap@gmail.com" className="underline">
                tailwindtap@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
