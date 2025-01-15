"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";

const info = [
  {
    name: "FrontEnd",
    title: "Frontend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero doloribus molestias natus laboriosam tenetur alias, veritatis sequi unde nobis placeat nemo tempora consectetur sapiente deserunt est, doloremque similique cumque voluptate vel enim distinctio quasi. Deleniti amet accusamus praesentium corporis officia harum autem, odio quasi repellendus, temporibus sequi, aliquam voluptas.",
    imageURL: "",
    linkForMore: "",
  },
  {
    name: "Backend",
    title: "Backend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero doloribus molestias natus laboriosam tenetur alias, veritatis sequi unde nobis placeat nemo tempora consectetur sapiente deserunt est, doloremque similique cumque voluptate vel enim distinctio quasi. Deleniti amet accusamus praesentium corporis officia harum autem, odio quasi repellendus, temporibus sequi, aliquam voluptas.",
    imageURL: "",
    linkForMore: "",
  },
  {
    name: "UIUX",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero doloribus molestias natus laboriosam tenetur alias, veritatis sequi unde nobis placeat nemo tempora consectetur sapiente deserunt est, doloremque similique cumque voluptate vel enim distinctio quasi. Deleniti amet accusamus praesentium corporis officia harum autem, odio quasi repellendus, temporibus sequi, aliquam voluptas.",
    imageURL: "",
    linkForMore: "",
  },
  {
    name: "ResponsiveBuilding",
    title: "Responsive Website Building",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero doloribus molestias natus laboriosam tenetur alias, veritatis sequi unde nobis placeat nemo tempora consectetur sapiente deserunt est, doloremque similique cumque voluptate vel enim distinctio quasi. Deleniti amet accusamus praesentium corporis officia harum autem, odio quasi repellendus, temporibus sequi, aliquam voluptas.",
    imageURL: "",
    linkForMore: "",
  },
];

function DetailDescription() {
  const params = useParams();
  const obj = info.filter((detail) => detail.name === params.slug);
  const infoObj = obj[0];

  return (
    <section className="flex flex-col min-h-[80vh] justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          <div className="order-2 md:order-none">
            {/* title */}
            <h1>{infoObj.title}</h1>
            <p>{infoObj.description}</p>
          </div>

          {/* <div className="flex items-center w-[298px] h-[298px]  xl:w-[498px] xl:h-[498px] justify-center order-1 md:order-none"> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
            }}
            className="flex items-center w-full h-[400px]  xl:w-[598px] xl:h-[598px] justify-center order-1 md:order-none relative"
          >
            <Image
              src="/assets/work/proj2.jpg"
              alt=""
              priority
              quality={95}
              className="object-cover"
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
