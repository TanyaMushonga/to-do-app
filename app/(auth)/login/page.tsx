import React from "react";
import LoginForm from "./LoginForm";
import GoogleButton from "@/components/otherComponents/GoogleButton";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

function page() {
  return (
    <main className="flex justify-center items-center md:p-10 p-5 h-screen">
      <div className="h-fit max-h-[50rem] w-full max-w-[30rem] overflow-hidden rounded-xl bg-accent shadow-lg p-5">
        <p className="text-center text-xl md:text-2xl font-bold">
          Login in to your account
        </p>
        <div className="mt-5">
          <LoginForm />
          <p className="text-center my-3">Or</p>
          <GoogleButton />
          <p className="text-center my-3">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
