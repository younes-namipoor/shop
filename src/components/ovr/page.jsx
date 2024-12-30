import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Image from "next/image";

export default function Ovr() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] h-[90vh] flex md:h-[60vh] flex-wrap rounded-[20px] mt-20 bg-custom-gradient1">
        <div className="w-full md:w-[50%] ">
          <h3 className="w-full flex justify-center pt-16  pb-10 text-[28px] text-white font-semibold ">
            Oculus VR
          </h3>
          <p className="px-8 pb-5 text-[#686A6F] leading-8">
            Ullamcorper malesuada proin libero nunc consequat interdum varius
            consequat mauris nunc congue nisi vitae.
          </p>
          <Stack
            spacing={2}
            direction="row"
            className="flex justify-center pl-10 items-center "
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
                width: "300px",
                height: "50px",

                ":hover": { background: "black", color: "white" },
              }}
            >
              View Offer
            </Button>
            <Button
              variant="outlined"
              sx={{
                background: "transparent",
                color: "white",
                borderRadius: "5px",
                outline: "none",
                border: "none",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "capitalize",
                width: "300px",
                height: "50px",
              }}
            >
              <PlayCircleIcon className="mr-3"></PlayCircleIcon>
              watch video
            </Button>
          </Stack>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            src="https://uploadkon.ir/uploads/051d30_247.png"
            alt=""
            width={300}
            height={300}
            className="mx-auto  pt-10 md:pt-32"
          />
        </div>
      </div>
    </div>
  );
}
