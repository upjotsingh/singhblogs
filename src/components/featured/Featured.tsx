"use client";
import { getLatestPost } from "@/services/usePosts";
import Image from "next/image";
import React from "react";

const Featured = () => {
  const { post, isLoading, isError } = getLatestPost();

  return (
    <div className="mt-8">
      <h1 className="text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-light">
        <b>Hey !</b> Discover my blogs and creative ideas.
      </h1>

      <div className="flex items-center gap-[50px] mt-[60px]">
        {isLoading ? (
          <>Loading...</>
        ) : isError ? (
          <>Not Able to load</>
        ) : (
          <>
            <div className="flex-1 relative h-[500px] max-md:hidden ">
              {post?.img && (
                <Image src={post?.img} alt="p1" fill className="object-cover" />
              )}
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <h1 className="text-4xl">{post?.title}</h1>
              <div
                className="font-light text-text_color_soft"
                dangerouslySetInnerHTML={{
                  __html: post?.desc || <>Loading...</>,
                }}
              />
              <button className="px-5 py-3 border-none rounded-md w-max bg-soft_background">
                Read More
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
