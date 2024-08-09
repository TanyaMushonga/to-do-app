import React from "react";

import GoogleButton from "@/components/otherComponents/GoogleButton";
import SignupForm from "./Signup";

function page() {
  return (
    <main className="flex justify-center items-center md:p-10 p-5 h-screen">
      <div className="h-fit max-h-[50rem] w-full max-w-[30rem] overflow-hidden rounded-xl bg-accent shadow-lg p-5">
        <p className="text-center text-xl md:text-2xl font-bold">
         Create an account
        </p>
        <div className="mt-5">
          <SignupForm/>
          <p className="text-center my-3">Or</p>
          <GoogleButton />
          <p className="text-center my-3">Already have an account? <a href="/login" className="text-primary">Login</a></p>
        </div>
      </div>
    </main>
  );
}

export default page;
