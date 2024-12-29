import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function Search() {
  return (
    <div className="w-full h-[350px] bg-[#181C1F]">
      <h3 className="w-full flex justify-center text-white pt-20 pb-8 text-[24px]">
        Dont Miss Our News
      </h3>
      <div className="w-full flex flex-wrap justify-center md:justify-center md:items-center">
        <input
          placeholder="Email"
          className="bg-black w-[90%] md:w-[50%] py-4 pl-4   rounded-md placeholder:text-center text-[16px] text-white  outline-none border-none"
        />
        <Stack
          spacing={2}
          direction="row"
          className="flex justify-center pt-10 md:pt-0 items-center md:ml-5 w-[90%] md:w-[20%] "
        >
          <Button
            variant="outlined"
            sx={{
              background: "#5B38ED",
              color: "white",
              borderRadius: "5px",
              outline: "none",
              border: "none",
              fontWeight: "600",
              fontSize: "14px",
              textTransform: "capitalize",
              width: "100%",
              padding: "14px 0px",

              ":hover": { background: "#5B20ED", color: "white" },
            }}
          >
            SUBSCRIBE
          </Button>
        </Stack>
      </div>
    </div>
  );
}
