"use client";
import React from "react";
import { useTodo } from "@/Providers/ToDoProvider";
import AddTodo from "./AddTodo";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Todocard from "./Todocard";

function YoTodos() {
  const { todostate } = useTodo();
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch("/api/todos").then((res) => res.json()),
  });

  // const {
  //   mutate: server_addtodo,
  //   isError,
  //   isSuccess,
  // } = useMutation({
  //   mutationFn: (todo: any) =>
  //     fetch("/api/todos", {
  //       method: "POST",
  //       body: JSON.stringify(todo),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     }).then((res) => res.json()),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  let title;
  let filteredData = [];

  switch (todostate) {
    case "personal":
      title = "Personal";
      filteredData = data?.filter((todo: any) => todo.category === "Personal");
      break;
    case "work":
      title = "Work";
      filteredData = data?.filter((todo: any) => todo.category === "Work");
      break;
    case "finance":
      title = "Finance";
      filteredData = data?.filter((todo: any) => todo.category === "Finance");
      break;
    case "others":
      title = "Others";
      filteredData = data?.filter((todo: any) => todo.category === "Others");
      break;
    case "add-todo":
      return <AddTodo />;
    default:
      title = null;
  }

  return (
    <main>
      <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
      <div className="space-y-2">
        {filteredData?.map((todos: any) => (
          <Todocard
            key={todos.id}
            title={todos.title}
            priority={todos.priority}
            description={todos.description}
            completed={todos.completed}
            createdAt={todos.createdAt}
            updatedAt={todos.updatedAt}
          />
        ))}
      </div>
    </main>
  );
}

export default YoTodos;
