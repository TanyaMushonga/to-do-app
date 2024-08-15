"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface MoreProps {
  id: string;
}

function More({ id }: MoreProps) {
  const queryClient = useQueryClient();

  const { mutate: server_updateTodo } = useMutation({
    mutationFn: (todo: any) =>
      fetch(`/api/edit-todo/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: !todo.completed }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-secondary hover:bg-secondary w-fit rounded-xl border-secondary">
          <Ellipsis size={16} color="#181b19" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            server_updateTodo({ id: id, completed: false });
          }}
        >
          Mark as done
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Edit Todo</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Delete Todo</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default More;
