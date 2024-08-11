"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

function GoogleButton() {
  return (
    <Button
      onClick={() => {
        signIn("google");
      }}
    >
      <div className="flex gap-5 justify-center items-center">
        <Image
          src={"/assets/google.png"}
          alt="google logo"
          width={20}
          height={20}
        />
        Continue with google
      </div>
    </Button>
  );
}

export default GoogleButton;
