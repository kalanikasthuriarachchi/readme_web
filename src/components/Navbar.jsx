import React, { useState } from "react";
import {
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import OwnerData from "../owner_data/owner_data.json";
import resumefile from "../assets/KALANI_KASTHURIARACHCHI_RESUME.pdf";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [themeDart, setTheme] = useState(false);
  const themeHandle = () => setTheme(!themeDart);

  const [activeLink, setActiveLink] = useState(0);

  const Nav_links = [
    { id: 1, label: "About", href: "#about" },
    { id: 2, label: "Services", href: "#services" },
    { id: 3, label: "Projects", href: "#projects" },
    { id: 4, label: "Experices", href: "#experices" },
    { id: 5, label: "Skills", href: "#skills" },
    { id: 6, label: "Contact", href: "#contacts" },
  ];

  return (
    <div>
      {OwnerData.map((owner_data) => {
        return (
          <div
            key={owner_data.id}
            className="z-[1000] fixed w-screen h-[90px] bg-white"
          >
            <div className=" container m-auto px-4 flex justify-between items-center w-full h-full">
              <div className="flex items-center">
                {/* <img src={Logo} width={25} alt="logo" /> */}
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">
                  KR.
                </h1>
              </div>
              <ul className="hidden md:flex">
                {Nav_links.map((link_list, index) => (
                  <li key={link_list.id}>
                    <a
                      href={link_list.href}
                      className={index === activeLink ? "text-blue" : ""}
                      onClick={() => setActiveLink(index)}
                    >
                      {link_list.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-row gap-10 items-center">
                <div className="flex flex-row gap-10 items-center">
                  <div onClick={themeHandle}>
                    {!themeDart ? (
                      <MoonIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
                    ) : (
                      <SunIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
                    )}
                  </div>
                  <div className="hidden md:flex border border-gray px-5 py-2 rounded-lg">
                    <a href={resumefile} className="bg-transparent text-black">
                      Resume
                    </a>
                  </div>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                  {!nav ? (
                    <Bars3Icon className="w-8 cursor-pointer" />
                  ) : (
                    <XMarkIcon className="w-8 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <ul
              className={
                !nav ? "hidden" : "absolute w-full px-8 pb-10 bg-white"
              }
            >
              <li className="cursor-pointer w-full p-3">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer w-full p-3">
                <a href="#services">Services</a>
              </li>
              <li className="cursor-pointer w-full p-3">
                <a href="#projects">Projects</a>
              </li>
              <li className="cursor-pointer w-full p-3">
                <a href="#experices">Experices</a>
              </li>
              <li className="cursor-pointer w-full p-3">
                <a href="#skills">Skills</a>
              </li>
              <li className="cursor-pointer w-full p-3">
                <a href="#contacts">Contact</a>
              </li>
              <div className="flex flex-col bg-blue my-4 rounded-lg">
                <button className=" text-white py-3">Download Resume</button>
              </div>
              <div className="flex gap-8 place-content-center mt-20 mp-10">
                <a href={"mailto:" + owner_data.owner.email}>
                  <MdOutlineEmail className="h-8 w-8 md:hidden cursor-pointer hover:scale-125 duration-700" />
                </a>
                <a href={owner_data.owner.social_media_url.github}>
                  <FiGithub className="h-8 w-8 md:hidden cursor-pointer hover:scale-125 duration-700" />
                </a>
                <a href={owner_data.owner.social_media_url.linkedin}>
                  <FiLinkedin className="h-8 w-8 md:hidden cursor-pointer hover:scale-125 duration-700" />
                </a>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
