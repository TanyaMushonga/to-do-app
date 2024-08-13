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

function More() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-secondary hover:bg-secondary w-fit rounded-xl border-secondary">
          <Ellipsis size={16} color="#181b19" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => {}}>Mark as done</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Edit Todo</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Delete Todo</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default More;
