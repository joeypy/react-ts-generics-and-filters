import { IFilter } from "../interfaces";

interface IFiltersProps<T> {
  dataSource: Array<T>;
  filterProperties: Array<IFilter<T>>;
  setFilterProperties: (filterProperties: Array<IFilter<T>>) => void;
}

export const Filters = <T extends Object>(props: IFiltersProps<T>) => {
  const { dataSource, filterProperties, setFilterProperties } = props;
  const object = dataSource.length > 0 ? dataSource[0] : {};

  const onChangeFilter = (property: IFilter<T>) => {
    const propertyMatch = filterProperties.some(
      (filterProperty) => filterProperty.property === property.property
    );
    const fullMatch = filterProperties.some(
      (filterProperty) =>
        filterProperty.property === property.property &&
        filterProperty.isTruthySelected === property.isTruthySelected
    );

    if (fullMatch) {
      setFilterProperties(
        filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        )
      );
    } else if (propertyMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        ),
        property,
      ]);
    } else {
      setFilterProperties([...filterProperties, property]);
    }
  };

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
            checked={filterProperties.some(
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
            checked={filterProperties.some(
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
