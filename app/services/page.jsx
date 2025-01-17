"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "FrontEnd Development",
    description:
      "The process of building the visual and interactive parts of a website or app that users see and interact with",
    href: "/services/FrontEnd",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "The process of working on the server-side software of a website, ensuring the website functions properly with databases, architecture and servers",
    href: "/services/Backend",
  },
  {
    num: "03",
    title: "Problem Solving",
    description:
      "Techniques in computer science that includes methods for finding solutions to complex issues using algorithmic or heuristic approaches",
    href: "/services/problem-solving",
  },
  {
    num: "04",
    title: "Responsive building",
    description:
      "Approach to make web pages render well on all screen sizes and resolutions while ensuring good usability.",
    href: "/services/ResponsiveBuilding",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[90px] xl:gap-[100px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="box flex transition-all duration-200 flex-col bg-black/40 border-x-2 border-y-2  shadow p-4 flex-1 justify-center gap-6 group "
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover  transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] bg-white rounded-full group-hover:bg-accent transition-all
                  duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-para">{service.description}</p>
                {/* <div className="border-b border-white/20 w-full"></div> */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
