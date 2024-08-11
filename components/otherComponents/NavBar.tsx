import Link from "next/link";
import SearchField from "./SearchField";
import UserButton from "./UserButton";

export default function NavBar() {
  return (
    <header className="stick top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 py-3">
        <Link href={"/"} className="text-2xl font-bold text-primary">
          Your To-Do
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}
