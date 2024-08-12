"use client";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { todoValues, todoSchema } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTodo } from "@/app/actions/addTodo";
import { useMutation } from "@tanstack/react-query";

function AddTodoForm() {
  const [error, setError] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<todoValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      priority: undefined,
      description: "",
      duedate: undefined,
    },
  });

  async function onSubmit(values: todoValues) {
    setError(undefined);
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {error && <p className="text-center text-destructive">{error}</p>}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="priority"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.error && (
                <p className="text-red-500">{fieldState.error.message}</p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duedate"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel>Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="w-full">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              {fieldState.error && (
                <FormMessage>{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Button type="submit">Add todo</Button>
      </form>
    </Form>
  );
}

export default AddTodoForm;
