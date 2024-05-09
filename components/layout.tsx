import SideNav from "@/components/sidenav";
import WeatherSummary from "@/components/weather-summary";
import { useForecast } from "@/hooks/use-forecast";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface MainNavProps {
  children: ReactNode;
}

export default function Layout({ children }: MainNavProps) {
  const isCollapsed = false;
  return (
    <div className="grid md:grid-cols-layout h-screen">
      <aside
        className={cn("border-r", {
          "w-60": !isCollapsed,
          "md:w-16": isCollapsed,
        })}
      >
        <SideNav isCollapsed={isCollapsed} />
      </aside>
      <main className={cn("p-10 max-w-5xl w-full m-auto")}>
        <div className="flex justify-end mb-4">
          <form className="me-3">
            <Input type="search" placeholder="Search Location" />
          </form>
          <Button variant="link" size="icon" aria-label="username">
            <Avatar>
              <AvatarImage src="https://github.com/gauravsoni119.png" alt="User profile" />
              <AvatarFallback>GS</AvatarFallback>
            </Avatar>
          </Button>
        </div>
        {children}
      </main>
      <aside
        className={cn("border-l", {
          "w-80": !isCollapsed,
          "md:w-16": isCollapsed,
        })}
      >
        <WeatherSummary />
      </aside>
    </div>
  );
}
