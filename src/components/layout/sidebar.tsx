"use client";

import { getTranslation } from "@/helpers/translation/getTranslation.helper";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import {
  Backpack,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  ClipboardList,
  House,
  TentTree,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { DebugButtons } from "../admin/debug.buttons";
import { Button } from "../ui/button";
import { SideBarButton } from "./SideBarButton";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const [expanded, setExpanded] = useLocalStorageState("_ui.sidebarExpanded", {
    storageSync: true,
    defaultValue: false,
  });
  const className = cn("w-full flex flex-row", { "justify-start": expanded });
  const t = getTranslation();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "h-screen bg-slate-50 dark:bg-slate-800 w-12 border-r-2 flex items-start flex-col justify-between animate-in duration-200",
        {
          "w-40": expanded,
          // "[&>div>div:nth-child(2)]:bg-red-400": !expanded
        }
      )}
      style={{
        transition: "width 0.2s",
      }}
    >
      <div className="flex flex-col px-2 gap-2 w-full pt-2">
        <Link href={"/"} className="w-full flex items-center justify-center">
          <Image
            src={"/icons/dice-d20.svg"}
            alt="Main Page"
            className="dark:hidden"
            width={48}
            height={48}
          />
          <Image
            src={"/icons/dice-d20-dark.svg"}
            alt="Main Page"
            className="hidden dark:block"
            width={48}
            height={48}
          />
        </Link>

        <Separator orientation="horizontal" />
        <SideBarButton
          {...{
            expanded,
            className,
            title: t.sidebar.home,
            isActive: pathname === "/",
          }}
        >
          <House />
        </SideBarButton>
        <SideBarButton
          {...{
            expanded,
            className,
            title: t.sidebar.users,
            href: "/users",
            isActive: pathname.includes("users"),
          }}
        >
          <Users />
        </SideBarButton>
        <SideBarButton
          {...{
            expanded,
            className,
            title: t.sidebar.characters,
            href: "/characters",
            isActive: pathname.includes("characters"),
          }}
        >
          <ClipboardList />
        </SideBarButton>
        <SideBarButton
          {...{
            expanded,
            className,
            title: t.sidebar.campaigns,
            href: "/campaigns",
            isActive: pathname.includes("campaigns"),
          }}
        >
          <TentTree />
        </SideBarButton>
        <SideBarButton
          {...{
            expanded,
            className,
            title: t.sidebar.campaigns,
            href: "/items",
            isActive: pathname.includes("items"),
          }}
        >
          <Backpack />
        </SideBarButton>

        <Separator orientation="horizontal" />
      </div>
      <div className="flex flex-col px-2 gap-2 w-full">
        <DebugButtons className={className} />
        <SideBarButton
          {...{
            expanded,
            className,
            title: t.sidebar.profile,
            href: "/profile",
            isActive: pathname.includes("profile"),
          }}
        >
          <CircleUserRound />
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
