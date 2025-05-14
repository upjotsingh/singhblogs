import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts: React.FC<{ withImage?: boolean }> = ({
  withImage = false,
}) => {
  return (
    <div className="flex flex-col gap-9 mt-9 mb-[60px]">
      {[1, 2].map((i) => (
        <Link key={i} href="/" className="flex items-center gap-5">
          {withImage && (
            <div className="flex-[1] aspect-square relative">
              <Image
                src={"/p1.jpeg"}
                alt="p1"
                fill
                className="rounded-[50%] border-[3px] border-gray-300 object-cover"
              />
            </div>
          )}
          <div className="flex-[4] flex flex-col gap-[5px]">
            <span className="px-2 py-[3px] rounded-[10px] text-white bg-[#ff7857] text-xs w-max ">
              Travel
            </span>
            <h3 className="text-text_color_soft">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span className="">John Doe</span>
              <span className="text-gray-500"> - 10.03.2024</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
