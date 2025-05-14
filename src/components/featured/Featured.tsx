import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-8">
      <h1 className="text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-light">
        <b>Hey, Upjot here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="flex items-center gap-[50px] mt-[60px]">
        <div className="flex-1 relative h-[500px] max-md:hidden ">
          <Image src="/p1.jpeg" alt="p1" fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="font-light text-text_color_soft">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            mollitia praesentium incidunt blanditiis corporis eveniet illum
            dolorum. Numquam inventore recusandae maxime enim corporis,
            perspiciatis reprehenderit eum sed eos id nihil!
          </p>
          <button className="px-5 py-3 border-none rounded-md w-max bg-soft_background">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
