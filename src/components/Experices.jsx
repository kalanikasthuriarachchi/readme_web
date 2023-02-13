import React from "react";
import ExpericesData from "../owner_data/owner_data.json";

function Experices() {
  return (
    <>
      {ExpericesData.map((ExpericesData) => {
        return (
          <div key={ExpericesData.id} className="max-w-[85vw] lg:h-screen m-auto flex pt-[2rem] flex-col justify-between">
            <div id="experices" className="container px-4 m-auto pt-[8rem]">
              <div className="flex flex-col justify-center w-full pb-[7rem]">
                <div className="flex flex-row place-content-center pb-2 items-center">
                  <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
                  <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
                    career path
                  </p>
                </div>
                <p className="md:text-5xl text-4xl font-semibold text-center">
                  Work Experices
                </p>
              </div>
              <div className="flex flex-row items-start md:m-auto md:max-w-[40rem]">
                <div className="flex flex-col item-end mr-8"></div>
                <div className="flex w-full flex-col m-auto place-content-center gap-6 relative">
                  <span className="h-full over top-[10px] left-[7px] absolute w-[2px] bg-gray opacity-40"></span>
                  {ExpericesData.experiences.map((experience_data) => {
                    return (
                      <div key={experience_data.id} className="flex flex-row items-start">
                        <div className="flex flex-col mt-2 mr-6">
                          {experience_data.id === 1 ? (
                            <span className="flex h-[15px] w-[15px] overflow-hidden">
                              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-blue opacity-50"></span>
                              <span className=" absolute rounded-full h-[15px] w-[15px] m-auto bg-gray border-[1px] border-blue"></span>
                              <span className="relative inline-flex rounded-full w-[8px] h-[8px] m-auto bg-blue"></span>
                            </span>
                          ) : experience_data.id === 2 ? (
                            <span className="flex h-4 w-4">
                              <span className="rounded-full w-4 h-4 m-auto bg-gray"></span>
                            </span>
                          ) : (
                            <>
                              <span className="flex h-4 w-4">
                                <span className="rounded-full w-4 h-4 m-auto bg-gray"></span>
                              </span>
                              <span className="flex ml-[2px]">
                                <span className="absolute inline-flex h-[10rem] w-3 rounded-full bg-white"></span>
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <p className="font-medium text-lg md:text-xl">
                            {experience_data.job_title}
                            {experience_data.id === 1 ? (
                              <span className="text-gray2 font-normal md:text-sm text-xs italic">
                                (current)
                              </span>
                            ) : (
                              <></>
                            )}
                          </p>
                          <p className="text-sm md:text-base">
                            {experience_data.company}
                          </p>
                          <p className="text-sm md:text-base text-gray2">
                            {experience_data.start_date} -{" "}
                            {experience_data.end_date}
                          </p>
                          <p className="text-sm md:text-base text-gray2">
                            {experience_data.location}
                          </p>

                          {experience_data.activity.map(
                            (experience_data_activity) => {
                              return experience_data_activity.activity ? (
                                <ul className="list-inside ml-3 mt-3 flex gap-1 flex-col">
                                  <li className="inline-flex text-md md:p-1 text-gray2">
                                    {experience_data_activity.activity ? (
                                      <div className="h-[2px] w-4 mt-3 bg-gray mr-2"></div>
                                    ) : (
                                      <></>
                                    )}

                                    <p>{experience_data_activity.activity}</p>
                                  </li>
                                </ul>
                              ) : (
                                <></>
                              );
                            }
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experices;
