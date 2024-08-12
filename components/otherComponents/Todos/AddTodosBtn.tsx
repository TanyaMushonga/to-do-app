"use client";
import { Button } from "../../ui/button";
import { Plus } from "lucide-react";
import { useTodo } from "@/Providers/ToDoProvider";

function AddTodos() {
  const { setTodostate } = useTodo();

  return (
    <Button
      onClick={() => {
        setTodostate("add-todo");
      }}
      className="bg-primary p-2 rounded-lg flex gap-1"
    >
      <Plus color="#eef6ef" strokeWidth={3} />
      <span className="text-white">add todo</span>
    </Button>
  );
}

export default AddTodos;
