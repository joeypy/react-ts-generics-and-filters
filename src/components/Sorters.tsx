import ISorter from "../interfaces/ISorter";

export interface iSortersProps<T> {
  object: T;
  setProperty: (property: ISorter<T>) => void;
}

export function Sorters<T extends Object>({
  object,
  setProperty,
}: iSortersProps<T>) {
  return (
    <div>
      <label htmlFor="sorters">Sorters! Try us too</label>
      <select
        name=""
        id="sorters"
        onChange={(event) => {
          const value = event.target.value.split("-");
          if (value.length === 2) {
            setProperty({
              property: value[0] as any,
              isDescending: value[1] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <option key={`${key}-true`} value={`${key}-true`}>
              Sort by "{key}" descending
            </option>
          );
        })}
        {Object.keys(object).map((key) => {
          return (
            <option key={`${key}-false`} value={`${key}-false`}>
              Sort by "{key}" ascending
            </option>
          );
        })}
      </select>
    </div>
  );
}
