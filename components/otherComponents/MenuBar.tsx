"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BriefcaseBusiness, BookHeart } from "lucide-react";
import { useTodo } from "@/Providers/ToDoProvider";

interface MenuBarProps {
  className?: string;
}

function MenuBar({ className }: MenuBarProps) {
  const { todostate, setTodostate } = useTodo();
  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3 w-fit md:w-full cursor-pointer"
        title="Home"
        asChild
        onClick={() => {
          setTodostate("personal");
        }}
      >
        <div className="">
          <BookHeart color="#44ca46" strokeWidth={3} />
          <span className="hidden lg:inline">Personal</span>
        </div>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3 w-fit md:w-full cursor-pointer"
        title="Home"
        asChild
        onClick={() => {
          setTodostate("work");
        }}
      >
        <div>
          <BriefcaseBusiness color="#44ca46" strokeWidth={3} />
          <span className="hidden lg:inline"> Work</span>
        </div>
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3 w-fit md:w-full cursor-pointer"
        title="Home"
        asChild
        onClick={() => {
          setTodostate("finance");
        }}
      >
        <div>
          <BriefcaseBusiness color="#44ca46" strokeWidth={3} />
          <span className="hidden lg:inline"> Finance</span>
        </div>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3 w-fit md:w-full cursor-pointer"
        title="Home"
        asChild
        onClick={() => {
          setTodostate("others");
        }}
      >
        <div>
          <BriefcaseBusiness color="#44ca46" strokeWidth={3} />
          <span className="hidden lg:inline"> Other</span>
        </div>
      </Button>
    </div>
  );
}

export default MenuBar;
