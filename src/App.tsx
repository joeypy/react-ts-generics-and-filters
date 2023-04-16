import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import widgets from "./mock-data/widgets";
import people from "./mock-data/people";
import genericSearch from "./utils/genericSearch";
import ISorter from "./interfaces/ISorter";
import IWidget from "./interfaces/IWidget";
import genericSort from "./utils/genericSort";
import IPerson from "./interfaces/IPerson";
import { Sorters } from "./components/Sorters";
import { WidgetRenderer } from "./components/WidgetRenderer";
import { PeopleRenderer } from "./components/PeopleRenderer";
import genericFilter from "./utils/genericFilter";
import Filters from "./components/Filters";
import IFilter from "./interfaces/IFilter";

function App() {
  const [query, setQuery] = useState("");
  const [showPeople, setShowPeople] = useState(false);
  // Filter
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<
    Array<IFilter<IWidget>>
  >([]);
  const [peopleFilterProperties, setPeopleFilterProperties] = useState<
    Array<IFilter<IPerson>>
  >([]);
  // Sort
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    ISorter<IWidget>
  >({
    property: "title",
    isDescending: false,
  });
  const [personSortProperty, setPersonSortProperty] = useState<
    ISorter<IPerson>
  >({
    property: "firstName",
    isDescending: false,
  });

  const buttonText = showPeople ? "Show Widgets" : "Show People";

  return (
    <div className="main-content">
      <button onClick={() => setShowPeople(!showPeople)}>{buttonText}</button>
      <SearchInput setSearchQuery={setQuery} />
      <div className="main-content__list">
        {!showPeople ? (
          <>
            <h2>Widgets</h2>
            <Sorters
              setProperty={(propertyType) =>
                setWidgetSortProperty(propertyType)
              }
              object={widgets[0]}
            />

            <Filters
              object={widgets[0]}
              properties={widgetFilterProperties}
              onChangeFilter={(property) => {
                const propertyMatch = widgetFilterProperties.some(
                  (widgetFilterProperty) =>
                    widgetFilterProperty.property === property.property
                );
                const fullMatch = widgetFilterProperties.some(
                  (widgetFilterProperty) =>
                    widgetFilterProperty.property === property.property &&
                    widgetFilterProperty.isTruthySelected ===
                      property.isTruthySelected
                );

                if (fullMatch) {
                  setWidgetFilterProperties(
                    widgetFilterProperties.filter(
                      (widgetFilterProperty) =>
                        widgetFilterProperty.property !== property.property
                    )
                  );
                } else if (propertyMatch) {
                  setWidgetFilterProperties([
                    ...widgetFilterProperties.filter(
                      (widgetFilterProperty) =>
                        widgetFilterProperty.property !== property.property
                    ),
                    property,
                  ]);
                } else {
                  setWidgetFilterProperties([
                    ...widgetFilterProperties,
                    property,
                  ]);
                }
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              {widgets
                .filter((widget) =>
                  genericSearch(widget, ["title", "description"], query)
                )
                .filter((widget) =>
                  genericFilter(widget, widgetFilterProperties)
                )
                .sort((a, b) => genericSort(a, b, widgetSortProperty))
                .map((widget) => (
                  <WidgetRenderer key={widget.id} {...widget} />
                ))}
            </div>
          </>
        ) : (
          <>
            <h2>People</h2>
            <Sorters
              setProperty={(propertyType) =>
                setPersonSortProperty(propertyType)
              }
              object={people[0]}
            />

            <Filters
              object={people[0]}
              properties={peopleFilterProperties}
              onChangeFilter={(property) => {
                peopleFilterProperties.includes(property)
                  ? setPeopleFilterProperties([
                      ...peopleFilterProperties.filter(
                        (peopleFilterProperty) =>
                          peopleFilterProperty !== property
                      ),
                    ])
                  : setPeopleFilterProperties([
                      ...peopleFilterProperties,
                      property,
                    ]);
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              {people
                .filter((person) =>
                  genericSearch(person, ["firstName", "lastName"], query)
                )
                .sort((a, b) => genericSort(a, b, personSortProperty))
                .map((person) => (
                  <PeopleRenderer key={person.firstName} {...person} />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
