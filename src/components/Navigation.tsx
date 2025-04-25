
import { LayoutDashboard, ListTodo, CheckSquare, Calendar } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Tasks",
    icon: ListTodo,
    href: "/tasks",
  },
  {
    title: "Completed",
    icon: CheckSquare,
    href: "/completed",
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/calendar",
  },
];

export function Navigation() {
  return (
    <NavigationMenu className="max-w-full w-full justify-start">
      <NavigationMenuList className="gap-2">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              href={item.href}
              className={cn(navigationMenuTriggerStyle(), "gap-2 h-9")}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
