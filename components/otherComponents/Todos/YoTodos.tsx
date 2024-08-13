"use client";
import React from "react";
import { useTodo } from "@/Providers/ToDoProvider";
import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";

function YoTodos() {
  const { todostate } = useTodo();

  let content;
  switch (todostate) {
    case "personal":
      content = (
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-semibold">Personal</h2>
          <DisplayTodos />
        </div>
      );
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
    case "add-todo":
      content = <AddTodo />;
      break;
    default:
      content = null;
  }

  return <div>{content}</div>;
}

export default YoTodos;
