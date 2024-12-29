"use client";
import React from "react";
import useStore from "../store/store";
import "./../global.css";
import NavbarProduct from "@/components/navbarproduct/page";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/page";
export default function Basket() {
  const { myPlus, myMinus } = useStore();
  const temp = useStore((state) => state.data);

  return (
    <main>
      <NavbarProduct />
      <div className="w-full py-10 flex gap-4 pl-12 ">
        <span className="text-[13px] text-[#5B5DF2]">
          <Link href="./">Home</Link>
        </span>
        <span className="text-[13px]">/</span>
        <span className="text-[13px]">card</span>
      </div>
      <div>
        <div className="w-full mt-20 flex justify-center flex-wrap">
          <div className="w-[70%] flex font-semibold text-[14px] ">
            <span className="w-[50%] flex">Product</span>
            <span className="w-[29%] flex justify-center">Quantity</span>
            <span className="w-[20%] flex justify-center">Subtotal</span>
          </div>
          <div className="w-[80%] border-b-2 border-t-2 mt-10 mb-20">
            {temp &&
              temp.map((val, i) => {
                return (
                  <div key={i} className="py-7 flex">
                    <div className="w-[50%] flex pl-3">
                      <div>
                        <Image
                          src={val.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex flex-wrap  items-center py-3">
                        <h6 className="w-full pl-6 text-[#4D5D6D] text-[14px]">
                          {val.name}
                        </h6>
                      </div>
                    </div>
                    <div className="w-[20%] flex items-center">
                      <div className="px-10 py-4 border rounded-lg flex gap-5">
                        <span
                          onClick={() => myMinus(val.id)}
                          className="cursor-pointer  px-3 flex items-center justify-center rounded-lg hover:bg-[#4928CF]  hover:text-white  transition-all duration-500 text-[#4D5D6D] text-[16px]"
                        >
                          -
                        </span>
                        <span className="cursor-pointer p-1  text-[#4D5D6D] text-[13px]">
                          {val.number}
                        </span>
                        <span
                          onClick={() => myPlus(val.id)}
                          className="cursor-pointer  px-3 flex items-center justify-center rounded-lg hover:bg-[#4928CF] hover:text-white   transition-all duration-500 text-[#4D5D6D] text-[16px]"
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-[20%] pl-16">
                      <h6 className="text-[14px] text-[#4D5D6D]">
                        ${val.price}
                      </h6>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
