"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
function Header() {
  return (
    <header className="py-8  xl:bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className=" flex text-4xl font-semibold gap-1">
            Ayush<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden py-2 px-7 bg-primary rounded-full justify-end   xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
