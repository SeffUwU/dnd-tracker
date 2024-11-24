import { RefAttributes } from "react";
import { Button, ButtonProps } from "../ui/button";
import { TooltipMessage } from "../ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SideBarButton({
  title,
  className,
  onClick,
  children,
  expanded,
  href = "/",
  isActive = false,
  ...props
}: {
  expanded: boolean;
  className?: string;
  isActive?: boolean;
  title: string;
  href?: string;
} & React.PropsWithChildren &
  ButtonProps &
  RefAttributes<HTMLButtonElement>) {
  return (
    <TooltipMessage message={title} disabled={expanded} side="right">
      <Button
        variant="ghost"
        className={cn(className, "text-ellipsis overflow-hidden", {
          "bg-blue-200 dark:bg-blue-800": isActive,
        })}
        onClick={onClick}
        asChild
        {...props}
      >
        <Link href={href}>
          {children}
          {expanded && title}
        </Link>
      </Button>
    </TooltipMessage>
  );
}
