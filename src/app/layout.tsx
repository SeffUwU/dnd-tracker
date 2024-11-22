import LoginForm from "@/components/auth/LoginForm";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row`}
      >
        <LoginForm />
        {/* <Sidebar />*/}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
