"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

const info = [
  {
    name: "FrontEnd",
    title: "Frontend Development",
    description:
      "Frontend development involves creating the part of a website that users directly interact with. It encompasses the use of HTML (for structuring content), CSS (for styling and layout), and JavaScript (for adding interactivity). Developers utilize frameworks and libraries such as React, Angular, and Vue.jsto streamline the development process. Ensuring that websites are responsive, meaning they look and function well on various devices, is a key aspect of frontend development.",
    imageURL: "/assets/services/frontend-image.png",
    linkForMore:
      "https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html",
  },
  {
    name: "Backend",
    title: "Backend Development",
    description:
      "Backend development refers to the server-side aspect of web development. It involves the creation and management of the core functionality and logic that power websites and applications. Unlike frontend development, which focuses on the user interface and experience, backend development deals with the behind-the-scenes activities that users don't directly see or interact with.",
    imageURL: "/assets/services/backend-development.png",
    linkForMore: "https://www.coursera.org/articles/back-end-developer",
  },
  {
    name: "problem-solving",
    title: "Problem Solving skills",
    description:
      "Problem-solving skills in computer science involve the ability to tackle complex issues with analytical thinking, algorithm design, debugging, optimization, logical reasoning, and creativity. These skills enable individuals to break down problems into manageable parts, create efficient step-by-step procedures, identify and fix errors in code, enhance the performance of algorithms, and apply logical principles to derive effective solutions. ",
    imageURL: "/assets/services/problem-solving-skills.png",
    linkForMore:
      "https://www.simplilearn.com/tutorials/programming-tutorial/problem-solving-in-programming",
  },
  {
    name: "ResponsiveBuilding",
    title: "Responsive Website Building",
    description:
      "An approach to web development that ensures websites are easily viewed and navigated across a variety of devices and screen sizes, from desktop computers to mobile phones and tablets. This technique involves using flexible layouts, fluid grids, and CSS media queries to adapt the website's design and layout according to the screen size and orientation of the user's device. The goal is to provide an optimal viewing experience, with minimal resizing, panning, and scrolling, ensuring usability and accessibility for all users.",
    testing: "Test by changing the screen size",
    imageURL: "/assets/services/responsive.jpg",
    linkForMore:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
  },
];

function DetailDescription() {
  const params = useParams();
  const obj = info.filter((detail) => detail.name === params.slug);
  const infoObj = obj[0];

  return (
    <section className="flex flex-col min-h-[80vh] justify-center py-12 xl:py-0 px-10 xl:px-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
        >
          <div className="order-2 flex flex-col gap-4 lg:order-none">
            {/* title */}
            <h1 className="text-3xl text-accent xl:text-5xl">
              {infoObj.title}
            </h1>

            <p className="text-base text-para leading-8">
              {infoObj.description}
            </p>

            <div className="py-2 px-4  text-white cursor-pointer  scale-75 hover:scale-100 transition-all duration-500 flex justify-center items-center gap-4 hover:bg-accent bg-[#ab15c2]  w-max rounded-full">
              <Link href={infoObj.linkForMore}>Know more</Link>
              <BsArrowRight />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
            }}
            className="flex items-center w-full h-[350px] xl:w-[598px] xl:h-[598px] justify-center order-1 lg:order-none relative"
          >
            <Image
              src={infoObj.imageURL}
              alt=""
              priority
              quality={95}
              className={`object-cover rounded-xl shadow_image `}
              fill={true}
            />
          </motion.div>
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
}
export default DetailDescription;
