"use client";

import { Button } from "@/components/ui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemeActive = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkThemeActive ? "light" : "dark");

  return (
    <div>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {isDarkThemeActive ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
