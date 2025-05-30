import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Link from "next/link";
import { resolve } from "path";
import { useEffect, useState } from "react";

export default function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px]">
        <CardList page={page} cat="" />
        <Menu />
      </div>
    </>
  );
}
