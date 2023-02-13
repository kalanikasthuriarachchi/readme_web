import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import TestimonialsData from "../owner_data/owner_data.json";

function Testimonials() {
  return (
    <>
      {TestimonialsData &&
        TestimonialsData.map((testimonials_data) => {
          return (
            <div
              key={testimonials_data.id}
              className="max-w-[85vw] lg:h-screen m-auto flex flex-col pt-[2rem] justify-between"
            >
              <div
                id="testimonials"
                className="container pt-[8rem] px-4 m-auto"
              >
                <div className="flex flex-col justify-center w-full pb-[7rem]">
                  <div className="flex flex-row place-content-center pb-2 items-center">
                    <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
                    <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
                      my clients
                    </p>
                  </div>
                  <p className="md:text-5xl text-4xl font-semibold text-center">
                    Testimonials
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-9">
                  {testimonials_data &&
                    testimonials_data.testimonials.map((testimonials_data) => {
                      return (
                        <div
                          key={testimonials_data.id}
                          className="flex flex-col hover:scale-105 duration-700 cursor-pointer text-center md:max-w-[26rem] w-[26rem] max-w-[20rem] m-auto"
                        >
                          <img
                            src={
                              process.env.PUBLIC_URL + testimonials_data.icon
                            }
                            alt=""
                            className="w-20 rounded-full m-auto mb-5"
                          />
                          <div className="flex flex-row m-auto items-center gap-2">
                            <p className="text-[16px] font-[500]">
                              {testimonials_data.name}
                            </p>
                            <div className="rounded-full w-1 h-1 bg-gray2"></div>
                            <p className=" text-gray2 text-[13px]">
                              {testimonials_data.company}
                            </p>
                          </div>

                          <p className="mb-3 relative p-3">
                            <RiDoubleQuotesL
                              className="text-gray2 alig w-[20px] absolute left-0 top-0"
                              alt=""
                            />
                            {testimonials_data.massage}
                            <RiDoubleQuotesR
                              className="text-gray2 w-[20px] absolute right-0 bottom-0"
                              alt=""
                            />
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Testimonials;
