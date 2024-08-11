"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function GoogleButton() {
  return (
    <Button
      onClick={() => {
        console.log("clicked");
      }}
      className="bg-foreground hover:bg-foreground/70"
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
