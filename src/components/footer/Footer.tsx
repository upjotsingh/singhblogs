import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Links",
      items: [
        { link: "/", name: "Homepage" },
        { link: "/", name: "Blog" },
        { link: "/", name: "About" },
        { link: "/", name: "Contact" },
      ],
    },
    {
      title: "Tags",
      items: [
        { link: "/", name: "Culture" },
        { link: "/", name: "Food" },
        { link: "/", name: "Style" },
        { link: "/", name: "Fashion" },
      ],
    },
    {
      title: "Social",
      items: [
        { link: "/", name: "Instagram" },
        { link: "/", name: "LinkedIn" },
        { link: "/", name: "Youtube" },
        { link: "/", name: "TikTok" },
      ],
    },
  ];

  return (
    <div className="mt-[50px] px-0 py-5 flex items-center justify-between text-text_color_soft max-md:flex-col max-md:gap-[30px]">
      <div className="flex-[1] flex flex-col gap-[14px]">
        <div className="flex items-center gap-[10px]">
          <Image src={"/logo.png"} alt="logo" height={50} width={50} />
          <h1 className="text-2xl">UpjotBlog</h1>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam
          repellat rem, ab, ipsa aliquam dignissimos quam labore voluptatibus,
          nulla id provident officia error illum recusandae quae libero ut sunt!
        </p>
        <div className="mt-[10px] flex gap-[10px]">
          <Image src="/github.svg" alt="github" width={18} height={18} />
          <Image src="/linkedin.svg" alt="linkedIn" width={18} height={18} />
          <Image src="/portfolio.png" alt="portfolio" width={18} height={18} />
        </div>
      </div>
      <div className="flex-[1] flex justify-end gap-[100px] max-lg:gap-[50px] max-md:w-[100%] max-md:justify-between max-sm:text-sm">
        {links.map((item) => (
          <div key={item.title} className="flex flex-col gap-[10px] font-light">
            <span className="font-bold">{item.title}</span>
            {item.items.map((item, i) => (
              <Link href={item.link} key={i}>
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
