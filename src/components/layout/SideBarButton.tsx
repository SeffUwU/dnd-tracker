import { RefAttributes } from "react";
import { Button, ButtonProps } from "../ui/button";
import { TooltipMessage } from "../ui/tooltip";

export function SideBarButton({
  title,
  className,
  onClick,
  children,
  expanded,
  ...props
}: {
  expanded: boolean;
  className?: string;
  title: string;
} & React.PropsWithChildren &
  ButtonProps &
  RefAttributes<HTMLButtonElement>) {
  return (
    <TooltipMessage message={title} disabled={expanded} side="right">
      <Button
        variant="ghost"
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
        {expanded && title}
      </Button>
    </TooltipMessage>
  );
}
