import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import React from "react";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const SinglePage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const data = await getData(slug);

  const imgUrl = getCldImageUrl({
    width: 600,
    height: 600,
    src: data.img,
  });

  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="max-2xl:text-6xl max-xl:text-5xl max-sm:text-3xl mb-[50px]">
            {data.title}
          </h1>
          <div className="flex items-center gap-[20px]">
            {data.user.image && (
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className="object-cover rounded-[50%]"
                />
              </div>
            )}

            <div className="flex flex-col gap-[5px] text-text_color_soft">
              <span className="text-xl font-medium">{data?.user.name}</span>
              <span>{data?.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {data.img && (
          <div className="flex-1 h-[350px] relative  max-lg:hidden">
            <img src={imgUrl} alt="" className="object-cover" />
          </div>
        )}
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-[5] mt-[60px]">
          <div
            className="single_page_description"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
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

export default SinglePage;
