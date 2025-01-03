import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      <div className="flex-1 h-[350px] relative">
        <Image
          src={"/p1.jpeg"}
          alt="p1"
          width={1}
          height={1}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-[30px]">
        <div className="detail">
          <span className="text-gray-500">11.02.2023 - </span>
          <span className="text-red-400 font-medium">Culure</span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        </Link>
        <p className="text-lg font-light text-text_color_soft">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea
          sequi illo repudiandae, aspernatur tempora natus, quas rerum mollitia
          facilis ipsa nihil animi autem ipsum. Iusto laudantium quia laborum
          optio.
        </p>
        <Link
          href={"/"}
          className="border-b-[1px] border-b-red-400 w-max px-0 py-[2px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
