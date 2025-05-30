"use client";
import { getPostsPickedByEditor } from "@/services/usePosts";
import { captilizeFirstLetter } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = () => {
  const { posts, isLoading, isError } = getPostsPickedByEditor();

  return (
    <div className="flex flex-col gap-9 mt-9 mb-[60px]">
      {posts?.map((post, i) => (
        <Link key={i} href="/" className="flex items-center gap-5">
          {post.img && (
            <div className="flex-[1] aspect-square relative">
              <Image
                src={post.img}
                alt="p1"
                fill
                className="rounded-[50%] border-[3px] border-gray-300 object-cover"
              />
            </div>
          )}
          <div className="flex-[4] flex flex-col gap-[5px]">
            <span className="px-2 py-[3px] rounded-[10px] text-white bg-[#ff7857] text-xs w-max ">
              {captilizeFirstLetter(post.catSlug)}
            </span>
            <h3
              className="text-text_color_soft"
              dangerouslySetInnerHTML={{ __html: post.desc }}
            />
            <div className="text-[12px]">
              <span className="">{post.user.name}</span>
              <span className="text-gray-500">
                - {post.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
