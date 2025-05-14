import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const BlogPage = ({ searchParams }: { searchParams: any }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <h1 className="bg-red-500 text-white py-[5px] px-[10px] text-center capitalize">
        {cat} Blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
