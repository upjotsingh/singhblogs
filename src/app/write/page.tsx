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

const WritePage = () => {
  const { status } = useSession();
  // const ReactQuill=dynamic(()=>import('react-quill-new'),{ssr:false})
  const router = useRouter();
  let url = "";
  const [file, setFile] = useState<any | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [body, setBody] = useState<Post>({
    title: "",
    desc: "",
    img: "",
    cat: null,
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
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: body.title,
        desc: body.desc,
        img: body.img,
        slug: slugify(body.title),
        catSlug: body.catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
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
        <div className="relative w-fit group cursor-pointer">
          <img src={body.img} />
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
      <input
        type="text"
        placeholder="Title"
        className="p-[50px] text-6xl border-none outline-none bg-transparent text-text_color"
        onChange={(e) => handleChange("title", e.target.value)}
      />
      <select
        className="mb-12 ml-12 p-[10px 20px] w-max"
        onChange={(e) => handleChange("catSlug", e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-5 h-[700px] relative">
        <button
          className="w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-text_color_soft flex justify-center items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-background absolute z-[999] w-full left-[50px]">
            <input
              className="hidden"
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-text_color_soft flex justify-center items-center cursor-pointer">
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className="w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-text_color_soft flex justify-center items-center cursor-pointer">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-text_color_soft flex justify-center items-center cursor-pointer">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
            {/* <button onClick={uploadFile}> Submit</button> */}

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
                return <button onClick={() => open()}>Upload</button>;
              }}
            </CldUploadWidget>
          </div>
        )}
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
