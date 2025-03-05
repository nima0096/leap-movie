"use client";

import { MovieZLogo } from "@/components/common";
import { GenreDropdown, SearchBar } from "@/components";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { useWidth } from "@/hooks";
import { MobileSearchBar } from "./MobileSearchBar";

export const Header = () => {
  const { isBigger } = useWidth(1024);

  return (
    <header className="fixed top-0 inset-x-0 z-20 h-[59px] bg-background flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
        <MovieZLogo className="text-indigo-700" />

        <div className="relative hidden lg:flex items-center gap-x-3">
          {isBigger && <GenreDropdown />}
          <SearchBar isMobile={false} />
        </div>

        <div className="flex items-center gap-x-3">
          <MobileSearchBar />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};
