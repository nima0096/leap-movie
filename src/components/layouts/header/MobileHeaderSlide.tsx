"use client";

import { GenreDropdown } from "@/components/genre";
import { SearchBar } from "@/components/search";
import { Button } from "@/components/ui";
import {
  searchBarAnimationTransition,
  searchBarAnimationVariants,
} from "@/constants";
import { useWidth } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type MobileHeaderSlideProps = {
  isSearchBarOpen: boolean;
  toggleSearchBar: () => void;
};

export const MobileHeaderSlide = ({
  isSearchBarOpen,
  toggleSearchBar,
}: MobileHeaderSlideProps) => {
  const { isSmaller } = useWidth(1024);

  return (
    <AnimatePresence>
      {isSearchBarOpen && (
        <motion.div
          exit="exit"
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 flex h-[59px] items-center justify-center px-5 w-full bg-background"
          variants={searchBarAnimationVariants}
          transition={searchBarAnimationTransition}
        >
          <div className="flex items-center gap-x-3">
            {isSmaller && <GenreDropdown showLabel={false} />}
            <SearchBar />
          </div>

          <Button variant="ghost" size="icon" onClick={toggleSearchBar}>
            <X />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
