import Image from "next/image";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
  <div className="flex items-center justify-between h-24">
    <div className="flex flex-1 gap-2 max-lg:hidden">
      <Image src='/github.svg' alt="github" width={24} height={24}/>
      <Image src='/linkedin.svg' alt="linkedin" width={24} height={24}/>
      <Image src='/portfolio.png' alt="portfolio" width={24} height={24}/>
    </div>
    <div className="flex-1 text-center font-bold text-4xl max-xl:text-[32px] max-lg:text-left max-md:text-2xl">UpjotBlog</div>
    <div className="flex flex-1 gap-5 items-center text-xl max-xl:text-lg max-xl:gap-4">
      <ThemeToggle/>
      <Link href='/' className="max-sm:hidden">Homepage</Link>
      <Link href='/' className="max-sm:hidden">Contact</Link>
      <Link href='/' className="max-sm:hidden">About</Link>
      <AuthLinks/>
    </div>
  </div>
  )
};

export default Navbar;
