"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9782604530",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ayushsharma722001@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sector 6,Heerapath,Mansarover,Jaipur",
  },
];

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "f7a6d5c7-2f84-4fe6-b139-36fa7b10068c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await res.json();
    if (result.success)
      toast({
        varient: "destructive",
        title: "Successfull",
        description: "Thanks for the initiative",
      });
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 1 },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                cumque in necessitatibus commodi nesciunt temporibus eius
                officiis debitis aut rerum.
              </p>
              {/* inputs */}
              <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="Firstname"
                  required
                />

                <Input
                  required
                  type="lastname"
                  name="lastname"
                  placeholder="Lastname"
                />
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
                <Input
                  required
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select required name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend">
                      FrontEnd Development
                    </SelectItem>
                    <SelectItem value="Backend">Backend Development</SelectItem>
                    <SelectItem value="Fullstack">
                      FullStack Development
                    </SelectItem>
                    <SelectItem value="Android">Android Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text area */}

              <Textarea
                name="message"
                className="h-[200px] rounded-xl"
                placeholder="Type your message here"
                required
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
