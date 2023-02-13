import React from "react";
import { TbStack, TbWorld } from "react-icons/tb";
import ServicesData from "../owner_data/owner_data.json";
import {IoInfiniteSharp} from "react-icons/io5";

function Services() {
  return (
    <>
      {ServicesData &&
        ServicesData.map((services_data) => {
          return (
            <div
              key={services_data.id}
              className="max-w-[85vw] m-auto pt-[2rem] lg:h-screen flex flex-col justify-between"
            >
              <div id="services" className="container pt-[8rem] px-4 m-auto">
                <div className="flex flex-col w-full pb-[7rem]">
                  <div className="flex flex-row place-content-center pb-2 items-center">
                    <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
                    <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
                      Services
                    </p>
                  </div>
                  <p className="md:text-5xl text-4xl font-semibold text-center">
                    Specialized in
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-14 md:gap-5 p-3 md:justify-between">
                  {services_data &&
                    services_data.services.map((services_data) => (
                      <div
                        key={services_data.id}
                        className="flex flex-col cursor-pointer gap-3 text-center w-full md:max-w-[20rem] m-auto md:m-0 max-w-[17rem] hover:scale-105 duration-700"
                      >
                        <div className="service-icon rounded-xl items-center flex md:w-20 md:h-20 w-16 m-auto h-16 bg-blueOpa">
                          {services_data.id === 1 ? (
                            <IoInfiniteSharp
                              className="m-auto text-blue text-5xl md:text-6xl"
                              alt=""
                            />
                          ) : services_data.id === 2 ? (
                            <TbStack
                              className="m-auto text-blue text-5xl md:text-6xl"
                              alt=""
                            />
                          ) : (
                            <TbWorld
                              className="m-auto text-blue text-5xl md:text-6xl"
                              alt=""
                            />
                          )}
                        </div>
                        <p className="md:text-2xl text-lg font-medium">
                          {services_data.title}
                        </p>
                        <p className=" md:text-xl text-base">
                          {services_data.discription}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Services;
