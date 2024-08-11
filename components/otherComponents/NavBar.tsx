import Link from "next/link";
import SearchField from "./SearchField";
import UserButton from "./UserButton";
import { Plus } from "lucide-react";

export default function NavBar() {
  return (
    <header className="stick top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 py-3">
        <Link href={"/"} className="text-2xl font-bold text-primary">
          Your To-Do
        </Link>
        <SearchField />
        <div className="flex sm:ms-auto gap-5">
        <UserButton className="" />
        <Link href="/add-todo" className="bg-primary p-2 rounded-lg flex gap-1">
          <Plus color="#eef6ef" strokeWidth={3} />
          <span className="text-white">add todo</span>
        </Link>
        </div>
      </div>
    </header>
  );
}
