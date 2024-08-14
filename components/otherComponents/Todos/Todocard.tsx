import More from "./More";

interface TodocardProps {
  title: string;
  priority: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

function Todocard({
  title,
  priority,
  description,
  completed,
  createdAt,
  updatedAt,
}: TodocardProps) {
  return (
    <div className="w-full h-auto p-3 bg-secondary rounded-md space-y-2 ">
      <div className="flex flex-row justify-between items-center">
        <div className="space-y-2">
          <h3 className="text-md md:text-xl font-semibold">{title}</h3>
          <div className="flex flex-wrap flex-row space-x-2">
            <div className="bg-destructive rounded-xl flex justify-around p-1">
              <p className="text-xs text-accent">{priority}</p>
            </div>
            <div className="bg-primary rounded-xl flex justify-around p-1">
              <p className="text-xs text-accent">{completed ? "yes" : "no"}</p>
            </div>
          </div>
        </div>
        <More />
      </div>
      <div className="border-t-2 bg-accent-foreground" />
      <div className="flex gap-3 flex-wrap items-center">
        <p className="text-xs">
          Created: <span className="text-xs">{createdAt}</span>
        </p>
        <p className="text-xs">
          Last edited: <span className="text-xs">{updatedAt}</span>
        </p>
      </div>
      <div className="border-t-2 bg-accent-foreground" />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Todocard;
