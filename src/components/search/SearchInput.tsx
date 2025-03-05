import { cn } from "@/lib";
import { Search } from "lucide-react";
import React, { ChangeEvent } from "react";
import { Input } from "../ui";

type SearchInputProps = {
  isMobile: boolean;
  searchValue: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({
  isMobile,
  searchValue,
  handleChange,
}: SearchInputProps) => {
  return (
    <div
      className={cn("relative text-muted-foreground", !isMobile && "w-[379px]")}
    >
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" />
      <Input
        type="text"
        placeholder="Search..."
        className={cn("pl-[38px]", isMobile && "border-none shadow-none")}
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
};
