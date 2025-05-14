"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] border-none p-3 bg-red-500 text-white cursor-pointer"
        style={{ visibility: hasPrev ? "visible" : "hidden" }}
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
      >
        Previous
      </button>
      <button
        style={{ visibility: hasNext ? "visible" : "hidden" }}
        className="w-[100px] border-none p-3 bg-red-500 text-white cursor-pointer"
        onClick={() => {
          router.push(`?page=${page + 1}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
