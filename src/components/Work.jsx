import React from "react";
import Project1 from "../assets/web-project.webp"
import Project2 from "../assets/career-portfolio.webp"
import Project3 from "../assets/meeting-app.webp"
import Project4 from "../assets/phonix-airline.webp"
import { IoLinkOutline } from "react-icons/io5";

function Work() {
  const ProjectContent = [
    {
      id:1,
      ImgUrl: Project1,
      title: "UHealthy Website",
      tool: "HTML CSS JavaScript PHP",
      link: "https://github.com/avishka2k/web-project",
    },
    {
      id:2,
      ImgUrl: Project2,
      title: "Carrer Protfolio Website",
      tool: "React.js Node.js",
      link: "https://github.com/avishka2k/career-portfolio",
    },
    {
      id:3,
      ImgUrl: Project3,
      title: "Meeting Mobile App",
      tool: "Flutter Firebase",
      link: "https://github.com/avishka2k/meeting_app",
    },
    {
      id:4,
      ImgUrl: Project4,
      title: "Flight Management System",
      tool: "Java SQL",
      link: "https://github.com/avishka2k/flight-management-system",
    },
  ];

  return (
    <div className="max-w-[85vw] lg:h-screen m-auto pt-[2rem] flex flex-col">
      <div id="projects" className="container px-4 m-auto pt-[8rem]">
        <div className="flex flex-col justify-center w-full pb-[7rem]">
          <div className="flex flex-row place-content-center pb-2 items-center">
            <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
            <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
              my work
            </p>
          </div>
          <p className="md:text-5xl text-4xl font-semibold text-center">
            Featured Projects
          </p>
        </div>
        <div>
          <div className="flex-col grid md:grid-cols-2 xl:grid-cols-4 gap-10 md:flex-row md:justify-between">
            {ProjectContent.map((ProjectContent) => (
              <div key={ProjectContent.id} className="shadow hover:shadow-lg hover:scale-105 rounded-xl w-[20rem] m-auto md:w-full duration-700 flex flex-col relative">
                <img
                  src={ProjectContent.ImgUrl}
                  alt="p1"
                  className="rounded-xl h-[25rem] hover:brightness-100 hover:opacity-100 transition-all duration-700 brightness-90 w-full hover:bg-contain opacity-80"
                />
                <div className="flex flex-col absolute  bottom-0 p-4 rounded-b-xl bg-white w-full h-[7rem]">
                  <p className=" text-black font-medium text-lg">
                    {ProjectContent.title}
                  </p>
                  <div className="flex flex-row gap-5 pl-2 pt-3">
                    <p>{ProjectContent.tool}</p>
                    <a
                      href={ProjectContent.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoLinkOutline className="text-2xl cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
