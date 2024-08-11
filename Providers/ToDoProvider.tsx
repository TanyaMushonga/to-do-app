"use client";
import React, { useState, createContext, useContext } from "react";

interface TodoContextType {
  children: React.ReactNode;
}
const ToDoContext = createContext<any>(null);

export const ToDoProvider: React.FC<TodoContextType> = ({ children }) => {
  const [todostate, setTodostate] = useState("Work");

  const contextValue = {
    todostate,
    setTodostate,
  };

  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(ToDoContext);
  if (context === undefined)
    throw new Error("the todo context must be used within a Todo provider");
  return context;
};
