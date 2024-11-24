"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logout } from "@/server/actions/auth/logout";
import { getUsers } from "@/server/actions/users/getUsers";
import { ShieldEllipsis } from "lucide-react";
import useLocalStorageState from "use-local-storage-state";
import { SideBarButton } from "../layout/SideBarButton";

interface DebugButtonsProps {
  className: string;
}

export function DebugButtons({ className }: DebugButtonsProps) {
  const [expanded] = useLocalStorageState("_ui.sidebarExpanded", {
    storageSync: true,
    defaultValue: false,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <SideBarButton {...{ expanded: false, className, title: "Debug" }}>
          <ShieldEllipsis /> {expanded && "Debug"}
        </SideBarButton>
      </PopoverTrigger>
      <PopoverContent className="ml-2 w-80" side="right">
        <div className="flex flex-col gap-2">
          <p>Debug menu:</p>
          <Button
            onClick={() => {
              getUsers().then(console.log);
            }}
            className="w-full h-6"
          >
            LOG ALL USERS
          </Button>

          <Button
            onClick={() => {
              logout();
            }}
            className="w-full h-6"
          >
            LOGOUT
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
