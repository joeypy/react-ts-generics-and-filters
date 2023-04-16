import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export interface ISearchInputProps {
  searchQuery: string;
  setSearchQuery(searchQuery: string): void;
  debounceTime?: number;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { searchQuery, setSearchQuery, debounceTime = 250 } = props;
  const [query, setQuery] = useState<string>(searchQuery);
  const debouncedQuery = useDebounce(query, debounceTime);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <>
      <label htmlFor="search" className="search-input">
        Search! Try me!
      </label>
      <input
        value={query}
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
