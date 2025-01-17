"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ayush96067" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ayush-sharma-42773112b/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ayush_rawat0702/?hl=en",
  },
  { icon: <FaTwitter />, path: "" },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
