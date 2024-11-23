"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Compass,
  House,
  Icon,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { DebugButtons } from "../admin/debug.buttons";
import { Button } from "../ui/button";
import { SideBarButton } from "./SideBarButton";
import D20Icon from "@/../public/icons/dice-d20.svg";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const className = cn("w-full flex flex-row", { "justify-start": expanded });
  return (
    <div
      className={cn(
        "h-screen bg-slate-50 dark:bg-slate-100 w-12 border-r-2 flex items-start flex-col justify-between transition-all animate-in duration-200",
        { "w-32": expanded }
      )}
    >
      <div className="flex flex-col px-2 gap-2 w-full pt-2">
        <Link href={"/"} className="w-full flex items-center justify-center">
          <Image
            src={"/icons/dice-d20.svg"}
            alt="Main Page"
            width={48}
            height={48}
          />
        </Link>

        <Separator orientation="horizontal" />
        <SideBarButton {...{ expanded, className, title: "Home" }}>
          <House />
        </SideBarButton>
        <SideBarButton {...{ expanded, className, title: "Users" }}>
          <Users />
        </SideBarButton>
        <SideBarButton {...{ expanded, className, title: "PCs" }}>
          <ClipboardList />
        </SideBarButton>
        <Separator orientation="horizontal" />
      </div>
      <div className="flex flex-col px-2 gap-2 w-full">
        <DebugButtons className={className} />
        <SideBarButton {...{ expanded, className, title: "Profile" }}>
          <User />
        </SideBarButton>

        <Button
          variant="ghost"
          className={className}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
    </div>
  );
}
