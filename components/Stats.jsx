"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },

  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 5,
    text: "Languages Learned",
  },
  {
    num: 10,
    text: "Projects",
  },

  {
    num: 20,
    text: "Code commits",
  },
];

function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.9, duration: 0.8 },
      }}
      className="pt-4 pb-12 xl:pt-0 xl:pb-0"
    >
      <div className="container mx-auto lg:mr-10">
        <div className="flex flex-wrap lg:flex-nowrap  lg:flex-col  mr-10 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={1.2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 `}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Stats;
