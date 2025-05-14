"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const logins = [
    { auth: "Google", authCode: "google" },
    { auth: "Github", authCode: "github" },
    { auth: "Facebook", authCode: "facebook" },
  ];

  const router = useRouter();

  const { data, status } = useSession();

  if (status === "loading") {
    return <div>Loading</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div
        className="bg-soft_background px-[150px] py-[100px] max-md:px-[100px] max-md:py-[50px] max-sm:p-8
       flex flex-col gap-[100px] rounded-[10px] 
       [&_:first-child]:bg-[#ff5555] [&>*:nth-child(2)]:bg-[#111] [&>*:nth-child(3)]:bg-[#087BEA]"
      >
        {logins.map((item) => (
          <div
            key={item.authCode}
            className="p-4 rounded-md border-none text-white font-bold cursor-pointer flex items-center 
            justify-center max-sm:font-normal max-sm:text-sm "
            onClick={() => signIn(item.authCode)}
          >{`Sign in with ${item.auth}`}</div>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
