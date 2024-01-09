import React from "react";
import Image from "next/image";
const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center text-sm sm:text-md p-4">
      <div className="h-full md:h-2/3 sm:w-2/3 w-full md:w-[70%] md:flex-row flex-col xl:w-1/2 flex shadow-2xl ">
        <div className="relative w-full h-1/3 md:h-full ">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        <div className=" flex flex-col justify-evenly p-8 gap-[30px] md:gap-4">
          <div className="font-bold text-lg">Welcome</div>
          <div>Log into your account or create a new using social buttons</div>
          <div className="flex flex-col gap-4 justify-around">
            <button className="w-full max-w-[13rem] border border-black rounded-md flex gap-3 p-2">
              <Image src="/google.png" alt="" height={20} width={20} />
              <div className="">Login with Google</div>
            </button>
            <button className="w-full max-w-[13rem] ring-1 ring-black rounded-md flex gap-3 p-2">
              <Image src="/facebook.png" alt="" height={20} width={20} />
              <div className="">Login with Facebook</div>
            </button>
          </div>
          <div>
            Have a problem? <span className="underline">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
