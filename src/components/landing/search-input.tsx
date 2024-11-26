import { Input } from "@/components/ui/input";
import React from "react";

interface SearchInputProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchInput({ setSearch }: SearchInputProps) {
  return (
    <>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
        className="max-w-2xl rounded-full"
      />
    </>
  );
}
