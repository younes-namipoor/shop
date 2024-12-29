import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SiMoneygram } from "react-icons/si";
import { TbClockHour3 } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import Image from "next/image";
export default function Page() {
  return (
    <div className="w-full h-[210vh] bg-[#111518] md:h-[150vh] relative -z-20">
      <div className="lg:-translate-x-72 lg:translate-y-56">
        <h3 className="capitalize text-[20px] font-semibold  text-[#797B7C] pt-32 flex justify-center items-center">
          from 999$
        </h3>
        <h2 className="text-white flex justify-center pt-3 items-center text-[40px] font-bold">
          iPhone 16 Pro
        </h2>
        <Stack
          spacing={2}
          direction="row"
          className="flex justify-center items-center mt-10"
        >
          <Button
            variant="outlined"
            sx={{
              background: "#F3F5F7",
              color: "#111518",
              borderRadius: "5px",
              outline: "none",
              border: "none",
              fontWeight: "600",
              fontSize: "13px",
              textTransform: "capitalize",
              padding: "15px 40px",
              ":hover": { background: "#3B23A0", color: "white" },
            }}
          >
            buy now
          </Button>
          <Button
            variant="outlined"
            sx={{
              background: "#111518",
              color: "white",
              borderRadius: "5px",
              outline: "none",
              border: "none",
              fontWeight: "600",
              fontSize: "13px",
              textTransform: "capitalize",
              padding: "15px 40px",
            }}
          >
            <PlayCircleIcon className="mr-3"></PlayCircleIcon>
            watch video
          </Button>
        </Stack>
      </div>
      <div className="bg-[#0E1113] lg:mt-96 relative z-10 bg-custom-gradient rounded-[10px] mt-20 mx-auto container w-[90%] justify-center items-center flex flex-wrap">
        <div className="text-white w-full flex justify-center items-center flex-wrap md:w-[50%] lg:w-[25%]">
          <LiaShippingFastSolid className="w-full md:h-full md:flex md:items-center md:justify-center md:w-[20%] mt-10 mb-5 md:mb-0 md:mt-0 text-[50px] "></LiaShippingFastSolid>
          <div className="w-full  flex flex-wrap justify-center items-center md:mt-10  md:w-[80%]">
            <h3 className="w-full flex justify-center items-center leading-8">
              Free Shipping
            </h3>
            <p className="w-full flex justify-center items-center mb-10 text-[12px] text-[#797B7C]">
              You have 10 days to return
            </p>
          </div>
        </div>
        <div className="text-white w-full flex justify-center items-center flex-wrap md:w-[50%] lg:w-[25%]">
          <SiMoneygram className="w-full md:h-full md:flex md:items-center md:justify-center md:w-[20%] mt-10 mb-5 md:mb-0 md:mt-0 text-[50px] "></SiMoneygram>
          <div className="w-full  flex flex-wrap justify-center items-center md:mt-10  md:w-[80%]">
            <h3 className="w-full flex justify-center items-center leading-8">
              Free Shipping
            </h3>
            <p className="w-full flex justify-center items-center mb-10 text-[12px] text-[#797B7C]">
              You have 10 days to return
            </p>
          </div>
        </div>
        <div className="text-white w-full flex justify-center items-center flex-wrap md:w-[50%] lg:w-[25%]">
          <TbClockHour3 className="w-full md:h-full md:flex md:items-center md:justify-center md:w-[20%] mt-10 mb-5 md:mb-0 md:mt-0 text-[50px] "></TbClockHour3>
          <div className="w-full  flex flex-wrap justify-center items-center md:mt-10  md:w-[80%]">
            <h3 className="w-full flex justify-center items-center leading-8">
              Free Shipping
            </h3>
            <p className="w-full flex justify-center items-center mb-10 text-[12px] text-[#797B7C]">
              You have 10 days to return
            </p>
          </div>
        </div>

        <div className="text-white w-full flex justify-center items-center flex-wrap md:w-[50%] lg:w-[25%]">
          <MdPayment className="w-full md:h-full md:flex md:items-center md:justify-center md:w-[20%] mt-10 mb-5 md:mb-0 md:mt-0 text-[50px]  md:text-[30px]"></MdPayment>
          <div className="w-full  flex flex-wrap justify-center items-center md:mt-10  md:w-[80%]">
            <h3 className="w-full flex justify-center items-center leading-8">
              Free Shipping
            </h3>
            <p className="w-full flex justify-center items-center mb-10 text-[12px] text-[#797B7C]">
              You have 10 days to return
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/2.png"
        alt=""
        width={500}
        height={500}
        className="object-contain lg:right-12  hidden md:flex absolute -z-10 right-52 top-64"
      />
    </div>
  );
}
