import React from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import OwnerData from "../owner_data/owner_data.json";

function Footer() {
  return (
    <div>
      {OwnerData.map((owner_data) => {
        return (
          <div key={owner_data.id} className="pt-[10rem] pb-[5rem] flex flex-col">
            <div className="flex flex-row gap-7 text-2xl md:text-4xl place-content-center">
              <a href={owner_data.owner.social_media_url.github}>
                <FiGithub className=" cursor-pointer" />
              </a>
              <a href={"mailto:" + owner_data.owner.email}>
                <MdOutlineEmail className=" cursor-pointer" />
              </a>
              <a href={owner_data.owner.social_media_url.linkedin}>
                <FiLinkedin className=" cursor-pointer" />
              </a>
            </div>
            <p className=" text-center text-[15px] text-gray2 pt-5">
              © 2022 - {owner_data.owner.name.first_name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
