import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { LayoutDashboard, Settings } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, title: "Dashboard", href: "/dashboard" },
  { icon: Settings, title: "Settings", href: "/settings" },
] as const;

export interface SideNavProps {
  isCollapsed?: boolean;
}

export default function SideNav({ isCollapsed = true }: SideNavProps) {
  const pathname = usePathname();
  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-full fixed w-[inherit] weather-wise__scrollable">
        <Link href="/" className="flex items-center justify-start p-6 md:mb-5">
          <Image
            src="/logo.png"
            alt="Weather Wise"
            className="me-2"
            width={40}
            height={40}
          />
          <span className="text-lg font-semibold">Weather Wise</span>
        </Link>
        <nav className="flex flex-col items-center group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 h-full pl-6">
          {navItems.map(({ href, icon: Icon, title }) => {
            const isActive = pathname === href;
            return isCollapsed ? (
              <Tooltip key={href}>
                <TooltipTrigger asChild>
                  <Link
                    className={cn(
                      "flex items-center justify-center h-14 w-full mb-3 hover:bg-accent",
                      !isActive && "text-zinc-400",
                      isActive && "border-r-2 border-r-primary",
                      isActive &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                    href={href}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4 bg-primary text-primary-foreground"
                >
                  {title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={href}
                className={cn(
                  "flex items-center w-full mb-6 p-2 hover:bg-accent",
                  !isActive && "text-zinc-400",
                  isActive && "border-r-2 border-r-primary",
                  isActive &&
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
                href={href}
              >
                <Icon className="h-5 w-5" />
                <span className="ms-2">{title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
}
