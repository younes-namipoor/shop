"use client";
import React from "react";
import { CiDesktopMouse2 } from "react-icons/ci";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "../../components/inc/page";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/Product" },
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="w-full h-24 bg-[#111518]">
      <ul className="flex w-full h-full">
        <li className="w-[50%] lg:w-[20%] h-full flex items-center pl-12">
          <CiDesktopMouse2 className="text-[50px] text-white" />
          <h1 className="text-white text-[26px] ml-3 font-[600]">Younes</h1>
        </li>
        <li className="flex w-[50%]  h-full  lg:hidden justify-end items-center mr-10 bg-[#111518]">
          <div>
            <AppBar
              position="static"
              background="none"
              className=" bg-[#111518]"
            >
              <Toolbar className="bg-[#111518] text-[#77797B]">
                <IconButton
                  className="bg-[#111518]"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <div className="bg-[#121519] text-white pt-5 flex justify-end pr-5">
                <CloseIcon
                  sx={{ fontSize: 30, cursor: "pointer" }}
                  onClick={toggleDrawer(false)}
                />
              </div>
              <List
                className="w-[70vh] h-[100vh] flex flex-col bg-[#121519] overflow-hidden"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <li className="w-96 h-52 flex items-center ml-3 ">
                  <CiDesktopMouse2 className="text-[50px] text-white" />
                  <h1 className="text-white text-[26px] ml-3 font-[600] ">
                    Younes
                  </h1>
                </li>
                {menuItems.map((val, i) => (
                  <ListItem key={i} className="text-white ml-3">
                    <ListItemText
                      className="hover:text-[#4928CF] transition-all duration-500 cursor-pointer"
                      primary={val.name}
                      primaryTypographyProps={{
                        style: { fontSize: "22px" }, // Apply font size to the primary text
                      }}
                    ></ListItemText>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
        </li>
        <li className="text-white hidden lg:flex lg:w-[70%] pl-12 h-full">
          <ul className="flex w-full h-full justify-center items-center gap-12">
            {menuItems.map((val, i) => {
              return (
                <li
                  className="flex justify-center text-[#797B7C] font-semibold hover:text-white transition-all duration-500 cursor-pointer items-center h-full"
                  key={i}
                >
                  {val.name}
                </li>
              );
            })}
          </ul>
        </li>
        <li className="hidden lg:flex w-[33%] h-full text-[#797B7C] justify-center items-center gap-8">
          <SearchIcon className="hover:text-white transition-all duration-500 cursor-pointer"></SearchIcon>
          <PersonOutlineIcon className="hover:text-white transition-all duration-500 cursor-pointer"></PersonOutlineIcon>
          <AddShoppingCartIcon className="hover:text-white transition-all duration-500 cursor-pointer"></AddShoppingCartIcon>
          <Link href="../basket">
            <div className="w-[50px] absolute top-0 right-24 group h-24 transition-all duration-700">
              <Card />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
