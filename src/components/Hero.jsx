import React from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import OwnerData from "../owner_data/owner_data.json";

function Hero() {
  return (
    <div>
      {OwnerData.map((owner_data) => {
        return (
          <div key={owner_data.id}
            id="about"
            className="max-w-[85vw] m-auto md:h-screen flex flex-col pt-20 justify-between"
          >
            <div className="container px-4 md:hidden m-auto">
              <div className="flex flex-col justify-center w-full py-8">
                <div className="flex flex-row place-content-center items-center">
                  <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
                  <p className="section-header uppercase tracking-[10px] text-gray2">
                    My Name is
                  </p>
                </div>
                <p className="md:text-6xl text-5xl text-center md:text-left font-bold capitalize">
                  {owner_data.owner.name.first_name}{" "}
                  <span className="text-blue">
                    {owner_data.owner.name.last_name}.
                  </span>
                </p>
              </div>
              <div className="m-auto md:w-full w-96">
                <p>
                  <img
                    src={process.env.PUBLIC_URL + owner_data.owner.image_path}
                    alt="owner"
                    className="hover:scale-105 duration-700"
                  />{" "}
                </p>
              </div>
              <div className="">
                <p className=" py-10 text-center md:text-left max-w-[820px] text-base sm:text-2xl">
                  {owner_data.owner.about}
                </p>
                <div className="flex gap-8 place-content-center pb-10">
                  <a href={"mailto:" + owner_data.owner.email}>
                    <MdOutlineEmail className="h-8 w-8 md:hidden cursor-pointer hover:scale-125 duration-700" />
                  </a>
                  <a
                    href={owner_data.owner.social_media_url.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub className="h-8 w-8 md:hidden cursor-pointer hover:scale-125 duration-700" />
                  </a>
                  <a
                    href={owner_data.owner.social_media_url.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin className="h-8 w-8 md:hidden cursor-pointer hover:scale-125 duration-700" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container px-4 m-auto hidden md:flex">
              <div className="flex flex-col justify-center w-full py-8">
                <div className="flex flex-row items-center">
                  <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
                  <p className="section-header uppercase text-gray2 tracking-[10px]">
                    My Name is
                  </p>
                </div>
                <p className="md:text-6xl text-5xl text-center md:text-left capitalize font-bold">
                {owner_data.owner.name.first_name} <span className="text-blue">{owner_data.owner.name.last_name}.</span>
                </p>
                <div className="">
                  <p className=" py-10 text-center md:text-left max-w-[40rem] text-base sm:text-2xl">
                    {owner_data.owner.about}
                  </p>
                  <div className="flex gap-8 pb-10">
                    <a href={"mailto:" + owner_data.owner.email}>
                      <MdOutlineEmail className="h-8 w-8 cursor-pointer hover:scale-125 duration-700" />
                    </a>
                    <a
                      href={owner_data.owner.social_media_url.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub className="h-8 w-8 cursor-pointer hover:scale-125 duration-700" />
                    </a>
                    <a
                      href={owner_data.owner.social_media_url.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiLinkedin className="h-8 w-8 cursor-pointer hover:scale-125 duration-700" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="m-auto md:float-right md:w-full w-96">
                <img
                  src={process.env.PUBLIC_URL + owner_data.owner.image_path}
                  className="float-right hover:scale-105 w-[40rem] duration-700"
                  alt="owner"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Hero;
