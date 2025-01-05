"use client";

import { animate, motion } from "framer-motion";

import loadGif from "../public/Loading.gif";
import Image from "next/image";

const stairAnimation = {
  initial: { right: "0%" },
  animate: {
    right: "100%",
  },
  exit: {
    left: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

function Stairs() {
  return (
    <>
      {/* render & motion divs, each representing a step of stairs 
Each div will have the same animation effect defined by the stairsAnimation object 
The delay for each div is calculated simultanuosly based on it's reversed index,
creating a staggered effect with decreasing delay for each subsequent step
  */}
      {/* {[...Array(6)].map((_, index) => {
        return (
          <>
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className="h-full w-full bg-white relative"
            />
          </>
        );
      })} */}
      <motion.div
        // key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.7,
          ease: "easeInOut",

          //   backgroundColor: { duration: 3, ease: "easeInOut" },
        }}
        className="h-full flex items-center w-full justify-center transition bg-black  relative"
      >
        <motion.p
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute text-center text-black"
        >
          <Image
            src={"/Loading.gif"}
            className="rounded-lg"
            alt="loading img"
            width={1000}
            height={100}
          />
        </motion.p>
      </motion.div>
    </>
  );
}

export default Stairs;
