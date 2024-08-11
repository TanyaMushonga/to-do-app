import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/Providers/SessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | todo",
    default: "todo",
  },
  description: "This is a simple todo application ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validateRequest();
  if (!session.user) redirect("/login");
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider value={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
