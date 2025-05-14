import React from "react";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async ({ page, cat }: { page: number; cat: string }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;

  return (
    <div className="flex-[5]">
      <h1 className="mx-0 my-[50px]">Recent Posts</h1>
      <div>
        {posts?.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
