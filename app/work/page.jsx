"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend project",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consectetur dicta vitae suscipit dolor odio distinctio tempore ab quae?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/proj1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consectetur dicta vitae suscipit dolor odio distinctio tempore ab quae?",
    stack: [{ name: "Next js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/proj2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consectetur dicta vitae suscipit dolor odio distinctio tempore ab quae?",
    stack: [{ name: "Node.js" }, { name: "React.js" }, { name: "Express" }],
    image: "/assets/work/proj3.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consectetur dicta vitae suscipit dolor odio distinctio tempore ab quae?",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/proj4.jpg",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consectetur dicta vitae suscipit dolor odio distinctio tempore ab quae?",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/proj5.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 1 },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60 ">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github link */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 "
              onSlideChange={(swiper) => {
                setProject(projects[swiper.activeIndex]);
              }}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide modules={[Navigation]} key={index}>
                    <div className="h-[460px] relative bg-pink-50/20 items-center flex group justify-center">
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image
                          fill={true}
                          src={project.image}
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
