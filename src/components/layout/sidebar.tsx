"use client";

import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Compass, House, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "h-screen bg-slate-50 dark:bg-slate-100 w-12 border-r-2 flex items-center flex-col justify-between transition-all animate-in duration-200",
        { "w-24": expanded }
      )}
    >
      <div className="flex flex-col px-2 gap-2 w-full pt-2">
        <Button variant="ghost" className="w-full pb-2">
          <Compass />
        </Button>
        <Separator orientation="horizontal" />

        <Button variant="ghost" className="w-full">
          <House />
          {expanded && "Home"}
        </Button>
        <Button variant="ghost" className="w-full">
          <User />
          {expanded && "Users"}
        </Button>
        <Separator orientation="horizontal" />
      </div>
      <div className="flex flex-col px-2 gap-2 w-full">
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
    </div>
  );
}
