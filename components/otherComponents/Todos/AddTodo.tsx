import React from "react";
import AddTodoForm from "./AddTodoForm";
function AddTodo() {
  return (
    <main className="p-5">
      <h3 className="text-center text-xl font-bold">Add your todos</h3>
      <div className="bg-card border-t-2 my-5" />
      <AddTodoForm />
    </main>
  );
}

export default AddTodo;
