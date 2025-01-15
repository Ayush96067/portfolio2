"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Front End",
    title: "Calc Age",
    description:
      "An app developed with Next.jsthat allows you to calculate your age in a fascinatingly detailed way. Not only can you see your age in years, but the app also breaks it down into months, days, hours, minutes, and even seconds! It's an engaging tool that shows you just how much time has passed since you were born, down to the tiniest unit of time. Whether you’re curious about how many minutes you’ve been alive or the exact number of days.",
    stack: [{ name: "React.js" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/work/calcAge.jpg",
    live: "https://calcagedaysec.netlify.app/",
    github: "https://github.com/Ayush96067/calcAge",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Split Expenses",
    description:
      "An app built with React that makes it easy to split bills with your friends when you go out to a restaurant or any other place. You can add a friend, enter the total bill amount, specify your own expenses, and indicate who is paying. The app will then calculate and show you who owes whom and how much.",
    stack: [{ name: "React.js" }, { name: "CSS3" }, { name: "HTML" }],
    image: "/assets/work/splitExp.jpg",
    live: "https://splitexpensess.netlify.app/",
    github: "https://github.com/Ayush96067/split-expenses",
  },
  {
    num: "03",
    category: "Backend Project",
    title: "Cloud File storage app",
    description:
      "An app that allows you to securely upload various types of files—like PDFs, images, or Word documents—into a database. Only authorized users can add or retrieve files, ensuring the highest level of security for your data. You can effortlessly access your uploaded files using your email, making it convenient and reliable. A solution for anyone looking to keep their files safe and easily accessible! 🛡️📁✨",
    stack: [
      { name: "Node.js" },
      { name: "Ejs" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/Cloud.jpg",
    live: "https://github.com/Ayush96067/cloudAp",
    github: "https://github.com/Ayush96067/cloudAp",
  },
  {
    num: "04",
    category: "Front End",
    title: "Movie Store",
    description:
      "Picture a website where you can look up your favorite movies, give them ratings, and find out all the details about them using information from IMDb. You can learn about the movie's plot, the actors who star in it, and its genre. It's like having your own personal movie database! It sounds like a fantastic resource for movie lovers! 🍿🎬",
    stack: [{ name: "React JS" }, { name: "CSS" }, { name: "HTML" }],
    image: "/assets/work/MovieStore.jpg",
    live: "https://your-movie-market.netlify.app/",
    github: "https://github.com/Ayush96067/your-movie-store",
  },
  {
    num: "05",
    category: "Frontend project",
    title: "Travel List",
    description:
      "Imagine you have a list on your phone or computer where you can add things you need to pack for a trip, along with how many of each item you need. As you pack each item, you can check it off the list to remove it. You can also organize the list in different ways, like by the order you added the items, by the item descriptions, or by whether you've packed them or not.Think of it as your digital packing helper! 🚀📋",
    stack: [{ name: "React.js" }, { name: "Css 3" }, { name: "HTML" }],
    image: "/assets/work/Travel.jpg",
    live: "https://travel-list07.netlify.app/",
    github: "https://github.com/Ayush96067/travel_list",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperRef, setSwiperRef] = useState();
  const handleRight = () => {
    swiperRef?.slideNext();
  };
  const handleLeft = () => {
    swiperRef?.slidePrev();
  };
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
                {project.title}
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
                      <TooltipTrigger className="w-[70px]  h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
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
              onSwiper={setSwiperRef}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 "
              onSlideChange={(swiper) => {
                setProject(projects[swiper.activeIndex]);
              }}
            >
              {/* <Button
                onClick={handleLeft}
                className="z-40 left-2  text-white bg-black/30 absolute  top-[50%] xl:top-[42%] text-base p-2"
              >
                <MoveLeft />
              </Button> */}
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] rounded-3xl relative bg-pink-50/20 items-center flex group justify-center">
                      <div className="absolute top-0 bottom-0  w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full ">
                        <Image
                          fill={true}
                          src={project.image}
                          className="object-contain bg-white rounded-3xl "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* <Button
                className="z-40 text-white bg-black/30 absolute right-2 top-[50%] xl:top-[42%] text-base p-2"
                onClick={handleRight}
              >
                <MoveRight />
              </Button> */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent mx-2 xl:mx-0 hover:bg-accent-hover text-primary rounded-full xl:rounded-none text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
