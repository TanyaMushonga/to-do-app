import React from "react";
import More from "./More";

interface TodocardProps {
  data: [];
}

function Todocard({ data }: TodocardProps) {
  return (
    <div className="w-full h-auto p-3 bg-secondary rounded-md space-y-2">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h3 className="text-md md:text-xl font-semibold">Title</h3>
          <div className="flex flex-wrap flex-row space-x-2">
            <div className="bg-destructive rounded-xl flex justify-around p-1">
              <p className="text-xs text-accent">High</p>
            </div>
            <div className="bg-primary rounded-xl flex justify-around p-1">
              <p className="text-xs text-accent">Completed</p>
            </div>
          </div>
        </div>
        <More className="" />
      </div>
      <div className="border-t-2 bg-accent-foreground" />
      <div className="flex gap-3 flex-wrap items-center">
        <p className="text-xs">
          Created: <span className="text-xs">12-09-2024</span>
        </p>
        <p className="text-xs font-thin">
          Last edited: <span className="text-xs">12-09-2024</span>
        </p>
        <div className="bg-primary rounded-xl flex justify-around p-1">
          <p className="text-xs text-accent">
            Due: <span className="text-xs text-accent">12-09-2024</span>
          </p>
        </div>
      </div>
      <div className="border-t-2 bg-accent-foreground" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          doloremque cum a, placeat esse laboriosam aspernatur animi fugit nemo
          optio ipsam maiores molestias saepe ratione, modi quis quae, rem
          reprehenderit!
        </p>
      </div>
    </div>
  );
}

export default Todocard;
