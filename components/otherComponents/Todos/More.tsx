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
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface MoreProps {
  id: string;
}

function More({ id }: MoreProps) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: server_updateTodo, isSuccess } = useMutation({
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

  const { mutate: delete_updateTodo, isSuccess: deleted } = useMutation({
    mutationFn: (todo: any) =>
      fetch(`/api/delete-todo/${todo.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // if (isSuccess) {

  //     toast({
  //       title: "Todo updated",
  //       description: "You have successfully updated the todo",
  //     });

  // }

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
        <AlertDialog>
          <AlertDialogTrigger className="text-sm ms-2">Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                todo record
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  delete_updateTodo({ id: id });
                }}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default More;
