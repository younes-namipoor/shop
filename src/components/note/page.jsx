import React from "react";

export default function Note() {
  return (
    <div className="mt-[600px] md:mt-20 w-full flex flex-wrap justify-evenly bg-[#FEFEFE]">
      <div className="w-[85%] lg:w-[23%] flex md:w-[45%] my-5 flex-wrap hover:bg-[#5B38ED] hover:text-white transition-all duration-500 bg-[#F3F5F7] h-48 rounded-[20px] shadow-lg ">
        <h3 className="w-full flex lg:text-[18px] justify-center py-10 font-semibold text-[22px]">
          #1 Hacus Habitasse
        </h3>
        <p className="w-full flex justify-center lg:px-5 leading-8 pb-10 text-[#9CA5AE]">
          Neque egestas odio nisi congue quisque.
        </p>
      </div>
      <div className="w-[85%] lg:w-[23%] flex md:w-[45%] my-5 flex-wrap hover:bg-[#5B38ED] hover:text-white transition-all duration-500 bg-[#F3F5F7] h-48 rounded-[20px] shadow-lg ">
        <h3 className="w-full flex lg:text-[18px] justify-center py-10 font-semibold text-[22px]">
          #2 Natoque Penatibus
        </h3>
        <p className="w-full flex justify-center lg:px-5 leading-8 pb-10 text-[#9CA5AE]">
          Ultrices tincidunt arcu non sodales vestibulum.
        </p>
      </div>
      <div className="w-[85%] lg:w-[23%] flex md:w-[45%] my-5 flex-wrap hover:bg-[#5B38ED] hover:text-white transition-all duration-500 bg-[#F3F5F7] h-48 rounded-[20px] shadow-lg ">
        <h3 className="w-full flex lg:text-[18px] justify-center py-10 font-semibold text-[22px]">
          #3 Tincidunt Ornare
        </h3>
        <p className="w-full flex justify-center lg:px-5 leading-8 pb-10 text-[#9CA5AE]">
          Dignissim diam quis enim lobortis scelerisque.
        </p>
      </div>
      <div className="w-[85%] lg:w-[23%] flex md:w-[45%] my-5 flex-wrap hover:bg-[#5B38ED] hover:text-white transition-all duration-500 bg-[#F3F5F7] h-48 rounded-[20px] shadow-lg ">
        <h3 className="w-full flex lg:text-[18px] justify-center py-10 font-semibold text-[22px]">
          #4 Aliquam Sagittis
        </h3>
        <p className="w-full flex justify-center lg:px-5 leading-8 pb-10 text-[#9CA5AE]">
          Venenatis cras sed felis eget aliquet commodo.
        </p>
      </div>
    </div>
  );
}
