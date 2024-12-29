import Image from "next/image";
import React from "react";

export default function InfoPro() {
  return (
    <div className="w-full bg-[#F9F9FB] h-[180vh] flex justify-evenly mb-24 md:h-[220vh] lg:mb-0 lg:h-[105vh] flex-wrap">
      <div className="bg-white mt-20 w-[85%] h-[50vh] shadow-lg lg:w-[40%] lg:h-[85%]  rounded-[20px] hover:text-white hover:bg-[#FFC750] transition-all duration-500">
        <div className="w-full h-full mx-10 my-8">
          <h3 className="font-semibold capitalize text-[22px]">labtops</h3>
          <h6 className="text-[#9E9E9E] mt-5 text-[13px]">245</h6>
          <Image
            src="/3.png"
            alt=""
            width={200}
            height={200}
            className="flex justify-center lg:w-56 mx-auto relative lg:top-36"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly  lg:w-[55%] lg:h-full">
        <div className="bg-white mt-20 w-[85%] h-[50vh] shadow-lg rounded-[20px] lg:h-[40%]  hover:bg-[#5B38ED] hover:text-white transition-all duration-500">
          <div className="w-full h-full mx-10 my-8">
            <h3 className="font-semibold capitalize text-[22px]">drones</h3>
            <h6 className="text-[#9E9E9E] mt-5 text-[13px]">28</h6>
            <Image
              src="/4.png"
              alt=""
              width={200}
              height={200}
              className="flex justify-center mx-auto"
            />
          </div>
        </div>
        <div className="bg-white overflow-hidden mt-20 lg:mt-8 w-[85%] md:w-[40%] h-[50vh] lg:h-[40%] shadow-lg rounded-[20px] hover:text-white hover:bg-[#09917F] transition-all duration-500">
          <div className="w-full h-full mx-10 my-8">
            <h3 className="font-semibold capitalize text-[22px]">smartphone</h3>
            <h6 className="text-[#9E9E9E] mt-5 text-[13px]">273</h6>
            <Image
              src="/5.png"
              alt=""
              width={200}
              height={200}
              className="flex justify-center mx-auto "
            />
          </div>
        </div>
        <div className="bg-white mt-20 w-[85%] h-[50vh] overflow-hidden lg:mt-8 lg:h-[40%] shadow-lg md:w-[40%] rounded-[20px] hover:bg-black hover:text-white transition-all duration-500">
          <div className="w-full h-full mx-10 my-8">
            <h3 className="font-semibold capitalize text-[22px]">gaming</h3>
            <h6 className="text-[#9E9E9E] mt-5 text-[13px]">25</h6>
            <Image
              src="/6.png"
              alt=""
              width={200}
              height={200}
              className="flex justify-center mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
