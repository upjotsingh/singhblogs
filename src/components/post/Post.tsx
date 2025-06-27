"use client";
import { getPost } from "@/services/usePosts";
import Image from "next/image";
import React from "react";
import Comments from "../comments/Comments";
import Menu from "../menu/Menu";

const Post = ({ slug }: { slug: string }) => {
  const { post, isError, isLoading } = getPost(slug);

  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="max-2xl:text-6xl max-xl:text-5xl max-sm:text-3xl mb-[50px]">
            {post?.title}
          </h1>
          <div className="flex items-center gap-[20px]">
            {post?.user?.image && (
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={post?.user.image}
                  alt=""
                  fill
                  className="object-cover rounded-[50%]"
                />
              </div>
            )}

            <div className="flex flex-col gap-[5px] text-text_color_soft">
              <span className="text-xl font-medium">{post?.user?.name}</span>
              <span>{post?.createdAt?.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-[500px] max-md:hidden ">
          {post?.img && (
            <Image src={post?.img} alt="p1" fill className="object-cover" />
          )}
        </div>
        {/* {post?.img && (
          <div className="flex-1 h-[350px] relative  max-lg:hidden">
            <img src={post?.img} alt="" className="object-cover" />
          </div>
        )} */}
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-[5] mt-[60px]">
          <div
            className="single_page_description"
            dangerouslySetInnerHTML={{ __html: post?.desc || "<></>" }}
          />
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Post;
