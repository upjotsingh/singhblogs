import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="flex-[2] mt-[60px] max-lg:hidden">
      <h2 className="text-gray-500 text-[16px] font-[400]">
        Chosen by the editor
      </h2>
      <h1>Editor's Pick</h1>
      <MenuPosts withImage />
      <h2 className="text-gray-500 text-[16px] font-[400]">
        Discover by topic
      </h2>
      <h1>Categories</h1>
      <MenuCategories />
    </div>
  );
};

export default Menu;
