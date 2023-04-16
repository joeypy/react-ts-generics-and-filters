import { useState } from "react";
import { ISorter, IFilter } from "../interfaces";
import { SearchInput } from "./SearchInput";
import { Sorters, Filters } from "./index";
import { PropsWithChildrenFunction } from "../types";
import { genericFilter, genericSearch, genericSort } from "../utils";

export interface ISearchSortAndFilterProps<T> {
  title: string;
  dataSource: Array<T>;
  initialSearchQuery: string;
  searchProperties: Array<keyof T>;
  initialSortProperties: ISorter<T>;
  initialFilterProperties: Array<IFilter<T>>;
}

export interface ISearchSortAndFilterState<T> {
  searchQuery: string;
  sortProperty: ISorter<T>;
  filterProperties: Array<IFilter<T>>;
}

export function SearchSortAndFilter<T extends Object>(
  props: PropsWithChildrenFunction<ISearchSortAndFilterProps<T>, T>
) {
  const {
    title,
    dataSource,
    initialSearchQuery,
    searchProperties,
    initialSortProperties,
    initialFilterProperties,
    children,
  } = props;

  const [searchSortAndFilterState, setSearchSortAndFilterState] = useState<
    ISearchSortAndFilterState<T>
  >({
    searchQuery: initialSearchQuery,
    sortProperty: initialSortProperties,
    filterProperties: initialFilterProperties,
  });

  const { searchQuery, sortProperty, filterProperties } =
    searchSortAndFilterState;

  return (
    <>
      <h2>{title}</h2>
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={(searchQuery) =>
          setSearchSortAndFilterState((prevState) => ({
            ...prevState,
            searchQuery,
          }))
        }
      />

      <br />

      <Sorters
        dataSource={dataSource}
        setSortProperty={(sortProperty) => {
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            sortProperty,
          });
        }}
      />

      <Filters
        dataSource={dataSource}
        filterProperties={filterProperties}
        setFilterProperties={(filterProperties) => {
          setSearchSortAndFilterState((prevState) => ({
            ...prevState,
            filterProperties,
          }));
        }}
      />

      {children &&
        dataSource
          .filter((a) => genericSearch(a, searchProperties, searchQuery))
          .sort((a, b) => genericSort(a, b, sortProperty))
          .filter((a) => genericFilter(a, filterProperties))
          .map((a) => children(a))}
    </>
  );
}
