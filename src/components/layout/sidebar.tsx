"use client";

import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Compass,
  House,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
        <Button variant="ghost" className={className}>
          <Compass />
        </Button>
        <Separator orientation="horizontal" />

        <Button variant="ghost" className={className}>
          <House />
          {expanded && "Home"}
        </Button>
        <Button variant="ghost" className={className}>
          <Users />
          {expanded && "Users"}
        </Button>
        <Button variant="ghost" className={className}>
          <ClipboardList />
          {expanded && "PCs"}
        </Button>

        <Separator orientation="horizontal" />
      </div>
      <div className="flex flex-col px-2 gap-2 w-full">
        <Button variant="ghost" className={className}>
          <User />
          {expanded && "Profile"}
        </Button>
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
