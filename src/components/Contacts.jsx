import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { BsPinMap } from "react-icons/bs";
import OwnerData from "../owner_data/owner_data.json";

function Contacts() {
  return (
    <div>
      {OwnerData.map((owner__data) => {
        const ContactOption = [
          {
            id: 1,
            Icon: BsPinMap,
            type: "Address",
            value: owner__data.owner.address,
          },
          {
            id: 2,
            Icon: IoCallOutline,
            type: "Phone",
            value: owner__data.owner.mobile,
          },
          {
            id: 3,
            Icon: IoMailOutline,
            type: "E-Mail",
            value: owner__data.owner.email,
          },
        ];
        return (
          <div className="max-w-[85vw] lg:h-screen m-auto flex flex-col pt-[2rem] justify-between">
            <div id="contacts" className="container px-4 m-auto pt-[8rem]">
              <div className="flex flex-col justify-center w-full pb-[7rem]">
                <div className="flex flex-row place-content-center pb-2 items-center">
                  <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
                  <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
                    contacts
                  </p>
                </div>
                <p className="md:text-5xl text-4xl font-semibold text-center">
                  Get In Touch
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-evenly gap-10">
                <form action="" className="md:max-w-[40rem]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border-gray border rounded-lg mb-6 focus:outline-blue"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-3 border-gray border rounded-lg mb-6 focus:outline-blue"
                  />
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="Message"
                    className="w-full rounded-lg border border-gray p-2 mb-6 focus:outline-blue"
                  ></textarea>
                  <input
                    type="submit"
                    value="Send message"
                    className="w-full bg-blue p-3 border rounded-lg text-white active:scale-95"
                  />
                </form>
                <div className="flex flex-col gap-6 mt-10">
                  {ContactOption.map((ContactOption) => (
                    <div
                      key={ContactOption.id}
                      className="flex flex-row cursor-pointer hover:scale-105 duration-700 items-center gap-6"
                    >
                      <div className="bg-blueOpa text-3xl place-content-center rounded-xl text-blue">
                        <ContactOption.Icon className="m-2" />
                      </div>
                      <div className="flex-col">
                        <p className="text-lg font-medium">
                          {ContactOption.type}
                        </p>
                        <p className=" text-gray2 text-sm">
                          {ContactOption.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contacts;
