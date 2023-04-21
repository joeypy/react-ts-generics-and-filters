import { useEffect, useState } from "react";
import { PropsWithChildrenFunction } from "../types";
import useDebounce from "../hooks/useDebounce";
import { genericSearch } from "../utils";

export interface ISearchInputProps<T> {
  data: Array<T>;
  propertiesSearchOn: Array<keyof T>;
}

export const GenericSearchInput = <T,>(
  props: PropsWithChildrenFunction<ISearchInputProps<T>, T>
) => {
  const { data, propertiesSearchOn, children } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  return (
    <>
      <label htmlFor="search" className="search-input">
        Search! Try me!
      </label>
      <input
        value={searchQuery}
        id="search"
        type="search"
        className=""
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {children &&
        data
          .filter((widget) =>
            genericSearch<T>(widget, propertiesSearchOn, searchQuery)
          )
          .map((x) => children(x))}
    </>
  );
};
