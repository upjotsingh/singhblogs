import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  const categories = [
    {
      name: "Style",
      link: "/blog?cat=style",
      color: "bg-[#57c4ff31]",
      img: "/style.png",
    },
    {
      name: "Fashion",
      link: "/blog?cat=fashion",
      color: "bg-[#da85c731]",
      img: "/fashion.png",
    },
    {
      name: "Culture",
      link: "/blog?cat=culture",
      color: "bg-[#ffb04f45]",
      img: "/culture.png",
    },
    {
      name: "Food",
      link: "/blog?cat=food",
      color: "bg-[#7fb88133]",
      img: "/food.png",
    },
  ];
  return (
    <div>
      <h1 className="mx-0 my-[50px]">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {categories.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className={`flex items-center gap-[10px] w-[15%] max-xl:w-[20%] max-lg:w-[25%] max-md:wi-[45%] max-sm:w-[100%]  h-16 justify-center rounded-xl ${item.color}`}
          >
            <Image
              src={item.img}
              alt={item.name}
              width={32}
              height={32}
              className="h-8 w-8 rounded-[50%]"
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
