import React from "react";
import LoginForm from "./LoginForm";
import GoogleButton from "@/components/otherComponents/GoogleButton";

function page() {
  return (
    <main className="flex justify-center items-center md:p-10 p-5 h-screen">
      <div className="h-fit max-h-[50rem] w-auto max-w-[30rem] overflow-hidden rounded-2xl bg-accent shadow-lg p-5">
        <p className="text-center text-xl md:text-2xl font-bold">
          Login in to your account
        </p>
        <div className="mt-5">
          <LoginForm />
          <p className="text-center my-3">Or</p>
          <GoogleButton />
        </div>
      </div>
    </main>
  );
}

export default page;
