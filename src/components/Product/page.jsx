
import Image from "next/image";
import React from "react";
import Link from "next/link";
async function getData() {
  const res = await fetch(
    "https://676b5449bc36a202bb848812.mockapi.io/product/"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Page() {
  const data = await getData();
  return (
    <div>
      <h2 className="w-full flex justify-center py-32 font-semibold text-[25px] md:justify-start md:pl-20">
        Featured Products
      </h2>
      <div className="w-full flex flex-wrap justify-evenly">
        {data &&
          data.map((val, i) => {
            let x = val.id + "-" + val.genre;
            return (
              <div
                className="w-full h-[600px] md:w-[45%] lg:w-[30%]  mt-10"
                key={i}
              >
                <Link
                  href={x}
                  as={x}
                  className="w-[90%] cursor-pointer rounded-[20px] overflow-hidden flex justify-center items-center bg-[#F4F6F8] mx-auto h-[350px]"
                >
                  <Image
                    src={val.image}
                    alt=""
                    height={450}
                    width={450}
                    className="hover:scale-110 transition-all duration-500"
                  />
                </Link>
                <h3 className="text-[17px] font-semibold flex md:pl-10 md:justify-start w-full py-8 justify-center">
                  {val.name}
                </h3>
                <h6 className="w-full flex md:justify-start md:pl-10 justify-center pb-3 text-[#4F5F6F]">
                  {"$" + `${val.price}`}
                </h6>
                <h6 className="w-full flex md:justify-start md:pl-10 justify-center py-3 text-[#4F5F6F]">
                  {val.genre}
                </h6>
              </div>
            );
          })}
      </div>
    </div>
  );
}
