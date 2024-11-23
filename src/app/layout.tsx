import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar";
import { checkAuth } from "@/server/actions/auth/check-auth";
import { getPathname } from "@/helpers/request/getPathname";
import { redirect } from "next/navigation";
import { QuickOptionsBubble } from "@/components/layout/QuickOptionsBubble";
import { ErrorCode } from "@/locale/error.codes";

export const metadata: Metadata = {
  title: "DnD Tracker",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const result = await checkAuth();
  const path = await getPathname();

  if (
    result.is_error &&
    result.code === ErrorCode.NotAuthorized &&
    !(path?.includes("auth/sign-in") || path?.includes("auth/sign-up"))
  ) {
    redirect("/auth/sign-in");
  }

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row h-full`}
      >
        {!result.is_error && result.value && <Sidebar />}
        <QuickOptionsBubble />
        <main className="p-2 h-full w-full">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
