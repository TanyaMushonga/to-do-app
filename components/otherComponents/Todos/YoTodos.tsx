"use client";
import React, { useEffect } from "react";
import { useTodo } from "@/Providers/ToDoProvider";
import AddTodo from "./AddTodo";
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import Todocard from "./Todocard";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import InfiniteScrollContainer from "../InfiniteScrollContainer";

function YoTodos() {
  const { todostate } = useTodo();
  const queryClient = useQueryClient();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const {
    data,
    isFetching,
    isFetchingNextPage,
    status,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: ({ pageParam }) =>
      ky
        .get(
          "/api/todos",
          pageParam ? { searchParams: { cursor: pageParam } } : {}
        )
        .json(),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage: any) => lastPage.nextCursor,
  });

  const todos = data?.pages.flatMap((page: any) => page.todos) || [];

  if (status === "pending") return <Loader2 className="mx-auto animate-spin" />;

  if (status === "error")
    return <p className="text-center text-destructive">An error has occured</p>;

  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView, hasNextPage, fetchNextPage]);

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: () => fetch("/api/todos?page=1").then((res) => res.json()),
  // });

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
      filteredData = todos?.filter((todo) => todo.category === "Personal");

      break;
    case "work":
      title = "Work";
      filteredData = todos?.filter((todo) => todo.category === "Work");
      break;
    case "finance":
      title = "Finance";
      filteredData = todos?.filter((todo) => todo.category === "Finance");
      break;
    case "others":
      title = "Others";
      filteredData = todos?.filter((todo) => todo.category === "Others");
      break;
    case "add-todo":
      return <AddTodo />;
    default:
      title = null;
  }

  return (
    <InfiniteScrollContainer
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
      className="overflow-x-auto "
    >
      <h2 className="text-lg md:text-xl font-semibold my-3">{title}</h2>
      <div className="space-y-2">
        {todos?.map((todos: any) => (
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
         {isFetchingNextPage && (
          <Loader2 className="mx-auto my-3 animate-spin" />
        )}
      </div>
    </InfiniteScrollContainer>
  );
}

export default YoTodos;
