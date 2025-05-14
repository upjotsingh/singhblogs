import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ key, item }: { key: string; item: any }) => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]" key={key}>
      {item.img && (
        <div className="flex-1 h-[350px] relative max-xl:hidden">
          <Image src={item.img} alt="p1" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-[30px]">
        <div className="detail">
          <span className="text-gray-500">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-red-400 font-medium capitalize">
            {item.catSlug}
          </span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className="text-lg font-light text-text_color_soft">
          {item.desc.substring(0, 60)}
        </p>
        <Link
          href={`/posts/${item.slug}`}
          className="border-b-[1px] border-b-red-400 w-max px-0 py-[2px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
