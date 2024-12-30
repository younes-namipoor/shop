"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useStore from "../store/store";
import NavbarProduct from "@/components/navbarproduct/page";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Footer from "@/components/footer/page";
import { MdAddShoppingCart } from "react-icons/md";

async function getData(x) {
  const res = await fetch(
    "https://676b5449bc36a202bb848812.mockapi.io/product/" + parseInt(x)
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Page({ params: paramsPromise }) {
  const { updateBasket} = useStore();
  const addToCart = useStore(state => state.addToCart);
  const [params, setParams] = React.useState(null);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    }

    unwrapParams();
  }, [paramsPromise]);
  React.useEffect(() => {
    if (!params) return;

    async function fetchData() {
      try {
        const result = await getData(params.slug);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, [params]);
  if (!params || !data) {
    return (
      <main className="w-full h-[100vh] flex flex-wrap justify-center items-center">
        <Image src="https://uploadkon.ir/uploads/76d530_249.gif" alt="" height={500} width={500} />
      </main>
    );
  }

  return (
    <main>
      <NavbarProduct />
      <section className="w-full  mt-20 mb-10 flex flex-wrap">
        <div className="w-full py-10 flex gap-4 pl-12 ">
          <span className="text-[13px] text-[#5B5DF2]">
            <Link href="./">Home</Link>
          </span>
          <span className="text-[13px]">/</span>
          <span className="text-[13px]">{data.name}</span>
        </div>
        <div className="w-full mt-10 flex  justify-center items-center lg:w-[50%] overflow-hidden">
          <Image
            src={data.image}
            alt=""
            width={500}
            height={500}
            className="hover:scale-105 w-[80%] transition-all duration-500 lg:w-[500px] lg:h-[600px]"
          />
        </div>
        <div className="w-full flex flex-wrap justify-center lg:w-[50%]">
          <h3 className="w-[80%] text-black py-10 font-semibold text-[30px]">
            {data.name}
          </h3>
          <h6 className="w-[80%] text-[#4D5D6D] text-[18px] pb-10 font-semibold">
            ${data.price}
          </h6>
          <p className="w-[80%] text-[#4D5D6D] text-[14px] leading-8">
            Ut aliquam purus sit amet luctus venenatis. Eleifend donec pretium
            vulputate sapien nec. Pellentesque pulvinar pellentesque habitant
            morbi tristique senectus et netus. Sodales ut etiam sit amet nisl.
            Facilisis volutpat est velit egestas. Praesent semper feugiat nibh
            sed pulvinar proin gravida. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget duis. Faucibus nisl tincidunt eget
            nullam non nisi est sit amet. Erat imperdiet sed euismod nisi porta
            lorem mollis aliquam. Tempus imperdiet nulla malesuada pellentesque
            elit.
          </p>
          <Stack
            spacing={2}
            direction="row"
            className="flex justify-center my-7  items-center  w-[80%] border-t-2 border-b-2 py-5 border-[#E7EBEE] "
          >
            <Button
              onClick={() => updateBasket(data)}
              variant="outlined"
              sx={{
                background: "#D8D4F1",
                color: "black",
                borderRadius: "5px",
                outline: "none",
                border: "none",
                fontWeight: "600",
                fontSize: "12px",
                textTransform: "capitalize",
                width: "50%",
                padding: "14px 0px",
                display: "flex",
                justifyContent: "center",

                ":hover": { background: "#5B20ED", color: "white" },
              }}
            >
              add to card
            </Button>
          </Stack>
          <div className="w-full py-8 flex justify-center ">
            <div className="w-[80%] flex gap-3  ">
              <div className="w-[70%]">
                <span className="text-black font-semibold text-[15px]">
                  Categories :
                </span>
                <span className="text-[#4D5D6D]">{data.genre}</span>
              </div>
              <div className="w-[30%] flex justify-end pr-8 text-[35px] cursor-pointer">
                <Link href="./basket">
                  <MdAddShoppingCart />
                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
