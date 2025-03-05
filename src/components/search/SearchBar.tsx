"use client";

import { usePathname } from "next/navigation";
import { SearchBarForSearchPage } from "./SearchBarForSearchPage";
import { SearchBarForOtherPage } from "./SearchBarForOtherPage";

type SearchBarProps = { isMobile?: boolean };

export const SearchBar = ({ isMobile = true }: SearchBarProps) => {
  const pathname = usePathname();

  return pathname === "/search" ? (
    <SearchBarForSearchPage isMobile={isMobile} />
  ) : (
    <SearchBarForOtherPage isMobile={isMobile} />
  );
};
