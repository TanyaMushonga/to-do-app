"use client";
import React from "react";
import { useTodo } from "@/Providers/ToDoProvider";

function YoTos() {
  const { todostate } = useTodo();

  let content;
  switch (todostate) {
    case "personal":
      content = <p>personal</p>;
      break;
    case "work":
      content = <p>work</p>;
      break;
    case "finance":
      content = <p>finance</p>;
      break;
    case "others":
      content = <p>others</p>;
      break;
    default:
      content = null;
  }

  return <div>{content}</div>;
}

export default YoTos;
