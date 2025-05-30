"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({
  page,
  hasPrev,
  hasNext,
  scrollRef,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const router = useRouter();

  const scroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] border-none p-3 bg-red-500 text-white cursor-pointer"
        style={{ visibility: hasPrev ? "visible" : "hidden" }}
        onClick={() => {
          router.push(`?page=${page - 1}`, { scroll: false });
          scroll();
        }}
      >
        Previous
      </button>
      <button
        style={{ visibility: hasNext ? "visible" : "hidden" }}
        className="w-[100px] border-none p-3 bg-red-500 text-white cursor-pointer"
        onClick={() => {
          router.push(`?page=${page + 1}`, { scroll: false });
          scroll();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
