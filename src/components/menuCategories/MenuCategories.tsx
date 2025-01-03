import Link from "next/link";
import React from "react";

const MenuCategories = () => {
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
    <div className="mt-[35px] mb-[60px] flex flex-wrap gap-3">
      {categories.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className={`px-[25px] py-[10px] rounded-[10px] text-sm ${item.color}  `}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
