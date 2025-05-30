"use client";
import React from "react";
import { getCategories } from "@/services/useCategory";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  const { category, isError, isLoading } = getCategories(true);

  return (
    <div>
      <h1 className="mx-0 my-[50px]">Popular Categories</h1>
      <div className="flex flex-wrap gap-5">
        {category?.map((item: Category) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={item.id}
            className={`flex items-center gap-[10px] w-[15%] capitalize max-xl:w-[20%] max-lg:w-[25%] max-md:wi-[45%] max-sm:w-[100%]  h-16 justify-center rounded-xl category-${item.slug}`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.slug}
                width={32}
                height={32}
                className="h-8 w-8 rounded-[50%]"
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
