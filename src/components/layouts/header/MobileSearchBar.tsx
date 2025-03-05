"use client";

import { Button } from "@/components/ui";
import { Search } from "lucide-react";
import { useState } from "react";
import { MobileHeaderSlide } from "./MobileHeaderSlide";

export const MobileSearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarOpen((previousState) => !previousState);
  };

  return (
    <div className="lg:hidden">
      <Button variant="outline" size="icon" onClick={toggleSearchBar}>
        <Search size={16} />
      </Button>

      <MobileHeaderSlide
        isSearchBarOpen={isSearchBarOpen}
        toggleSearchBar={toggleSearchBar}
      />
    </div>
  );
};
