"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center  xl:text-left order-2 xl:order-none">
              <motion.p
                initial={{ opacity: 0, translateY: "-100%" }}
                animate={{
                  translateY: "0%",
                  opacity: 1,
                  transition: { delay: 1.7, duration: 0.7 },
                }}
                className="text-xl"
              >
                Software Developer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, translateX: "-100%" }}
                animate={{
                  opacity: 1,
                  translateX: "0%",
                  transition: { delay: 1.4, duration: 0.7 },
                }}
                className="h1"
              >
                Hello I'm <br />{" "}
                <span className="text-accent ">Ayush Sharma</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{
                  translateY: "0%",
                  opacity: 1,
                  transition: { delay: 1.7, duration: 0.7 },
                }}
                className="max-w-[500px] mb-9 text-white/80"
              >
                I excel at crafting elegant digital experiences and I am
                proficient in various programming languages and technologies
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.7, duration: 0.7 },
                }}
                className="flex flex-col xl:flex-row items-center gap-8"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0 ">
                  <Social
                    containerStyles={`flex gap-6`}
                    iconStyles={`w-9 h-9  border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary  hover:transition-all duration-700`}
                  />
                </div>
              </motion.div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>

        <Stats />
      </section>
    </>
  );
};

export default page;
