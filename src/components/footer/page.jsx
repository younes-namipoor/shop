import React from "react";
import { BsFillMouseFill } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-[400px] bg-[#111518] ">
      <div className="w-full pt-20 justify-center flex text-white">
        <BsFillMouseFill className="text-[40px]" />
        <h5 className="ml-2 mt-1 capitalize text-[22px]">younes</h5>
      </div>
      <div className="w-full flex justify-center pt-10 text-[#888A79]">
        <p className="capitalize text-[21px]">devloped by younes namipooor</p>
      </div>
      <div className="w-full pt-10 flex justify-center gap-6">
        <Link
          className="p-2 bg-white text-black rounded-full border"
          href="https://github.com/younes-namipoor"
        >
          <FaGithub className="text-[30px]  cursor-pointer" />
        </Link>
        <Link
          className="p-2 bg-white text-black rounded-full border"
          href="https://www.linkedin.com/in/younes-namipoor"
        >
          <FaLinkedin className="text-[30px]  cursor-pointer" />
        </Link>
        <Link
          className="p-2 bg-white text-black rounded-full border"
          href="https://www.instagram.com/younes.namipoor"
        >
          <FaSquareInstagram className="text-[30px]  cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
