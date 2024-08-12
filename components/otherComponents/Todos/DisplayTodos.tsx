"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function DisplayTodos() {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch("/api/todos").then((res) => res.json()),
    // staleTime: 3000
    //refetchInterval: 4000,
  });

  const {
    mutate: server_addtodo,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (todo: any) =>
      fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  if (error) return <p>there is an error</p>;

  if (isLoading) <p>loading</p>;

  return (
    <div>
      {data?.message}
      <button
        onClick={() => {
          server_addtodo({
            name: "tanya",
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default DisplayTodos;
