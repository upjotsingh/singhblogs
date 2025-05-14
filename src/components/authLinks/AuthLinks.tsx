"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState<boolean>(false);
  //temp
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/" className="max-sm:hidden">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span
            className="cursor-pointer max-sm:hidden"
            onClick={() => signOut()}
          >
            Logout
          </span>
        </>
      )}
      <div
        className="cursor-pointer w-5 h-4 hidden flex-col justify-between max-sm:flex"
        onClick={() => setOpen(!open)}
      >
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-[100%] h-[2px] bg-text_color"></div>
        ))}
      </div>
      {open && (
        <div
          className="flex flex-col items-center justify-center gap-[50px] absolute top-[100px] left-0 bg-background
    text-3xl h-[calc(100vh-100px)] w-[100%]"
        >
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            <>
              <Link href="/">Write</Link>
              <span className="cursor-pointer" onClick={() => signOut()}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
