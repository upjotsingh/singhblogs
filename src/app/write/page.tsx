"use client";
import { useSession } from "next-auth/react";
import { CldUploadWidget, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";
import { destroyImg } from "../../utils/cloudinary";
import dynamic from "next/dynamic";
import { submitPost } from "@/services/usePosts";
import { getCategories } from "@/services/useCategory";
import { captilizeFirstLetter } from "@/utils/utils";

const WritePage = () => {
  const { status } = useSession();
  const { savePost, isPostLoading, post, postError } = submitPost();
  const { category, isError, isLoading } = getCategories();
  const router = useRouter();
  const [file, setFile] = useState<any | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [body, setBody] = useState<Post>({
    title: "",
    desc: "",
    img: "",
    catSlug: "",
  });

  const handleChange = (key: string, val: string | null) => {
    setBody({ ...body, [key]: val });
  };

  const deleteImg = () => {
    if (body.img)
      destroyImg(body.img, (r: any) => {
        if (r?.result === "ok") {
          setBody({ ...body, img: null });
        }
      });
  };

  const slugify = (str: string): string =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    try {
      const res = await savePost({
        title: body.title,
        desc: body.desc,
        img: body.img,
        slug: slugify(body.title),
        catSlug: body.catSlug || "style",
      });

      if (res.status === 200) {
        const data = res.post;
        router.push(`/posts/${data.slug}`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (status === "loading") {
    return <div>Loading</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div>
      {body.img && (
        <div className="relative w-fit group h-[500px] cursor-pointer">
          <Image src={body.img} alt="p1" fill className="object-cover" />
          <div
            className="transition-opacity
            opacity-0 group-hover:opacity-100 delay-200 bg-[#0000008c] h-10 w-full 
            absolute top-0 left-0 right-0 z-10 flex justify-end pr-2
            "
          >
            <Image
              src="/close.svg"
              alt=""
              width={32}
              height={32}
              onClick={deleteImg}
            />
          </div>
        </div>
      )}
      <div className="p-[20px]">
        <CldUploadWidget
          signatureEndpoint="/api/sign-image"
          // uploadPreset="upjotblogs"
          onSuccess={(result, { widget }) => {
            if (
              typeof result?.info === "object" &&
              result?.info !== null &&
              "public_id" in result.info
            ) {
              let url = getCldImageUrl({
                src: result?.info?.public_id,
              });
              handleChange("img", url);
            } else {
              console.log("Error", result?.info);
            }
            widget?.close();
            console.log(result?.info);
          }}
          onError={(err) => {
            console.log(err);
          }}
        >
          {({ open }) => {
            return (
              <div className="flex items-center gap-3">
                <button
                  className="w-8 h-8 rounded-[50%] bg-transparent border-[1px] border-text_color_soft flex justify-center items-center cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                <p>Upload Image</p>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>

      <input
        type="text"
        placeholder="Title"
        className="py-[10px] px-[20px] text-6xl border-none outline-none bg-transparent text-text_color"
        onChange={(e) => handleChange("title", e.target.value)}
      />
      {isLoading && <div>Loading Categories....</div>}
      {category?.length && (
        <div className="p-[20px]">
          <select
            className="mb-12 p-[10px 20px] w-max border"
            onChange={(e) => handleChange("catSlug", e.target.value)}
          >
            {category?.map((cat) => (
              <option value={cat.slug}>{captilizeFirstLetter(cat.slug)}</option>
            ))}
          </select>
        </div>
      )}

      <div className="flex gap-5 h-[700px] relative">
        <ReactQuill
          className="w-full text-text_color"
          theme="bubble"
          value={body.desc}
          onChange={(v) => handleChange("desc", v)}
          placeholder="Tell your story....."
        />
      </div>
      <button
        className="absolute top-7 right-5 py-[10px] px-[20px] border-none bg-[#1a8917]
       text-white cursor-pointer rounded-xl"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
