import type { Metadata } from "next";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/Providers/SessionContext";
import NavBar from "@/components/otherComponents/NavBar";
import MenuBar from "@/components/otherComponents/MenuBar";
import { ToDoProvider } from "@/Providers/ToDoProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | todo",
    default: "todo",
  },
  description: "This is a simple todo application ",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <ToDoProvider>
        <div
          className="flex min-h-screen flex-col"
          suppressHydrationWarning={true}
        >
          <NavBar />
          <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
            <MenuBar className="stick top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
            {children}
          </div>
          <MenuBar className="sticky bottom-0 flex w-full justify-between gap-1 border-t bg-card p-3 sm:hidden" />
        </div>
      </ToDoProvider>
    </SessionProvider>
  );
}
