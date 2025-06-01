import Post from "@/components/post/Post";
import React from "react";

const SinglePage = ({ params }: { params: any }) => {
  const { slug } = params;

  return <Post slug={slug} />;
};

export default SinglePage;
