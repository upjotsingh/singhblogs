"use client";
import { getCategories } from "@/services/useCategory";
import { captilizeFirstLetter } from "@/utils/utils";
import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  const { category, isError, isLoading } = getCategories();

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
      {category?.map((item, i) => (
        <Link
          key={i}
          href={`/blog?cat=${item.slug}`}
          className={`px-[25px] py-[10px] rounded-[10px] text-sm category-${item.slug}  `}
        >
          {captilizeFirstLetter(item.title)}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
