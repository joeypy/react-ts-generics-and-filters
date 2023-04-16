import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

export const SearchInput = ({ setSearchQuery }: ISearchInputProps) => {
  const [query, setQuery] = useState<string>("");
  const debounceQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debounceQuery);
  }, [debounceQuery, setSearchQuery]);

  return (
    <>
      <label htmlFor="search" className="search-input">
        Search! Try me!
      </label>
      <input
        id="search"
        type="search"
        className=""
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
};
