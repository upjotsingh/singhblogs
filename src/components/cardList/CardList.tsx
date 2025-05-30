"use client";
import React, { useRef } from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { getPosts } from "@/services/usePosts";

const CardList = ({ page, cat }: { page: number; cat: string }) => {
  const { posts, count, isError, isLoading } = getPosts(page, cat);
  const postRef = useRef<HTMLDivElement>(null);

  const POST_PER_PAGE = 2;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  return (
    <div ref={postRef} id="main_posts" className="flex-[5]">
      <h1 className="mx-0 my-[50px]">Recent Posts</h1>
      <div>
        {posts?.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        page={page}
        hasPrev={hasPrev}
        hasNext={hasNext}
        scrollRef={postRef}
      />
    </div>
  );
};

export default CardList;
