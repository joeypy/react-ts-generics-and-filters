import IFilter from "../interfaces/IFilter";

interface IFiltersProps<T> {
  object: T;
  properties: Array<IFilter<T>>;
  onChangeFilter: (property: IFilter<T>) => void;
}

const Filters = <T extends Object>({
  object,
  properties,
  onChangeFilter,
}: IFiltersProps<T>) => {

  

  return (
    <div>
      <label>Filters! Try us too!</label>
      {Object.keys(object).map((key) => (
        <div key={key}>
          <input
            type="checkbox"
            value={key}
            id={`${key}-true`}
            onChange={() =>
              onChangeFilter({ property: key as any, isTruthySelected: true })
            }
            checked={properties.some(
              (property) =>
                property.property === key && property.isTruthySelected
            )}
          />
          <label htmlFor={`${key}-true`}>'{key}' is truthy</label>

          <input
            type="checkbox"
            id={`${key}-false`}
            value={key}
            onChange={() =>
              onChangeFilter({ property: key as any, isTruthySelected: false })
            }
            checked={properties.some(
              (property) =>
                property.property === key && !property.isTruthySelected
            )}
          />
          <label htmlFor={`${key}-false`}>'{key}' is falsy</label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
