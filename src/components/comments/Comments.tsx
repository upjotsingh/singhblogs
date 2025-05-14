"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState<string>("");

  const handleSubmit = async () => {
    console.log("here");
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc("");
  };

  return (
    <div className="mt-[50px]">
      <h1 className="text-text_color_soft mb-[30px]">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            placeholder="Write a comment..."
            className="p-5 w-[100%]"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button
            className="py-3 px-6 bg-teal-600 text-white font-bold border-none rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href={"/"}>Login to write commmnt</Link>
      )}
      <div className="mt-[50px]">
        {data?.map((item: any) => (
          <div className="mb-[50px]" key={item.id}>
            <div className="flex items-center gap-5 mb-5">
              {item.user.image && (
                <div className="w-[50px] h-[50px] relative">
                  <Image
                    src={item.user.image}
                    alt=""
                    fill
                    className="object-cover rounded-[50%]"
                  />
                </div>
              )}
              <div className="flex flex-col gap-[5px] text-text_color_soft">
                <span className="font-medium">{item.user.name}</span>
                <span className="text-sm">
                  {item.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
            <p className="text-lg font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
