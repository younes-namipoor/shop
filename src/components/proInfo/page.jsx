import Image from "next/image";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function ProInfo() {
  return (
    <div className="mt-[150px] w-full h-[160vh] bg-[#111518] flex justify-evenly flex-wrap lg:h-[120vh] pb-[10px]">
      <div className="w-full h-[60%] flex items-center ml-10 lg:w-[45%] lg:h-full justify-center">
        <Image src="https://uploadkon.ir/uploads/c18d30_248.png" width={550} height={500} alt="" />
      </div>
      <div className="w-full h-[40%] lg:w-[45%] lg:h-full flex items-center lg:py-52  flex-wrap">
        <h6 className="text-[#9D9FA0] flex justify-center mt-[10px] w-full h-12 text-[22px]">
          From $1099
        </h6>
        <h3 className="text-white flex justify-center mt-[15px] text-[35px] w-full h-12">
          iPad Pro
        </h3>
        <p className="text-white text-center px-24 mt-[15px] text-[16px] leading-8 w-full h-12">
          Libero nunc consequat interdum Varius sitamet mattis vulputate
          Ultricies mieget mauris pharetra
        </p>
        <Stack
          spacing={2}
          direction="row"
          className="flex justify-center  md:pl-10 py-8  items-center w-full mt-20 h-32"
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
              width: "150px",
              height: "50px",

              ":hover": { background: "#5B38ED", color: "white" },
            }}
          >
            Buy Now
          </Button>
        </Stack>
      </div>
    </div>
  );
}
