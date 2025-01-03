import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
