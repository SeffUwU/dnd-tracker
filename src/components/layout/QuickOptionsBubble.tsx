"use client";

import { cn } from "@/lib/utils";
import { AllowedLocale } from "@/locale/error.messages";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

// TODO refactor
export function QuickOptionsBubble() {
  const [currentLocale, setCurrentLocale] = useLocalStorageState("_ui.locale", {
    defaultValue: AllowedLocale.en,
  });
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="absolute top-5 right-16 ">
      <div className="relative">
        <div
          className={cn(
            "absolute w-8 h-8 bg-slate-500 rounded-full top-2 flex items-center justify-center transition-all duration-75 animate-out select-none hover:cursor-pointer",
            {
              "-top-3": expanded,
              "-left-8": expanded,
            }
          )}
          onClick={() => {
            setCurrentLocale((prev) =>
              prev === AllowedLocale.en ? AllowedLocale.ru : AllowedLocale.en
            );
          }}
        >
          {currentLocale == AllowedLocale.en ? "EN" : "RU"}
        </div>
        <div
          className="absolute top-0 left-0 w-11 h-11 rounded-full bg-slate-400 hover:bg-slate-700 hover:cursor-pointer animate-in duration-100 transition-colors z-30"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
        ></div>
      </div>
    </div>
  );
}
