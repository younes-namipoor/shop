import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaGhost } from "react-icons/fa";
import { MdStars } from "react-icons/md";

export default function CardSec() {
  return (
    <div className="mt-[100px] justify-center w-full flex flex-wrap lg:justify-evenly">
      <div className="w-[90%] h-[500px] border rounded-[20px] shadow-md mb-20 lg:w-[30%]">
        <div className="w-full h-[20%] flex my-12 justify-center">
          <BiSolidOffer className="w-full h-full hover:text-[#5B38ED] transition-all duration-500"></BiSolidOffer>
        </div>
        <h3 className="w-full pb-10 flex justify-center font-semibold text-[20px]">
          Special Offers
        </h3>
        <p className="w-full text-center px-10 text-[#9D9FA0]">
          Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore
          dolore magna aliqua.
        </p>
        <Stack
          spacing={2}
          direction="row"
          className="flex justify-center  md:pl-10 py-8 mt-6 items-center w-full"
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
              fontSize: "15px",
              textTransform: "capitalize",
              width: "150px",
              height: "50px",

              ":hover": { background: "#5B38ED", color: "white" },
            }}
          >
            Learn More
          </Button>
        </Stack>
      </div>
      <div className="w-[90%] h-[500px] border rounded-[20px] shadow-md mb-20 lg:w-[30%]">
        <div className="w-full h-[20%] flex my-12 justify-center">
          <FaGhost className="w-full h-full hover:text-[#5B38ED] transition-all duration-500"></FaGhost>
        </div>
        <h3 className="w-full pb-10 flex justify-center font-semibold text-[20px]">
          Amazing Events
        </h3>
        <p className="w-full text-center px-10 text-[#9D9FA0]">
          Massa tincidunt nunc pulvinar sapien et ligula ullamcorper blandit
          turpis cursus commodo sed egestas egestas.
        </p>
        <Stack
          spacing={2}
          direction="row"
          className="flex justify-center  md:pl-10 py-8 mt-6 items-center w-full"
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
              fontSize: "15px",
              textTransform: "capitalize",
              width: "150px",
              height: "50px",

              ":hover": { background: "#5B38ED", color: "white" },
            }}
          >
            Learn More
          </Button>
        </Stack>
      </div>
      <div className="w-[90%] h-[500px] border rounded-[20px] shadow-md mb-20 lg:w-[30%]">
        <div className="w-full h-[20%] flex my-12 justify-center">
          <MdStars className="w-full h-full hover:text-[#5B38ED] transition-all duration-500"></MdStars>
        </div>
        <h3 className="w-full pb-10 flex justify-center font-semibold text-[20px]">
          Human Reviews
        </h3>
        <p className="w-full text-center px-10 text-[#9D9FA0]">
          Ullamcorper malesuada proin libero nunc consequat interdum varius
          consequat mauris nunc congue nisi vitae.
        </p>
        <Stack
          spacing={2}
          direction="row"
          className="flex justify-center  md:pl-10 py-8 mt-6 items-center w-full"
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
              fontSize: "15px",
              textTransform: "capitalize",
              width: "150px",
              height: "50px",

              ":hover": { background: "#5B38ED", color: "white" },
            }}
          >
            Learn More
          </Button>
        </Stack>
      </div>
    </div>
  );
}
