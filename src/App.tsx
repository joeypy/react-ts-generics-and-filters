import { useState } from "react";
import { PeopleRenderer, WidgetRenderer } from "./components";
import { SearchSortAndFilter } from "./components/SearchSortAndFilter";
import widgets from "./mock-data/widgets";
import people from "./mock-data/people";

function App() {
  const [showPeople, setShowPeople] = useState(false);

  const buttonText = showPeople ? "Show Widgets" : "Show People";

  return (
    <div className="main-content">
      <button onClick={() => setShowPeople(!showPeople)}>{buttonText}</button>

      <div className="main-content__list">
        {!showPeople && (
          <SearchSortAndFilter
            title={"Widgets"}
            dataSource={widgets}
            initialSearchQuery={""}
            searchProperties={["title", "description"]}
            initialSortProperties={{ property: "title", isDescending: false }}
            initialFilterProperties={[]}
          >
            {(widget) => (
              <div
                key={widget.id}
                style={{
                  margin: "1rem 0",
                }}
              >
                <WidgetRenderer {...widget} />
              </div>
            )}
          </SearchSortAndFilter>
        )}

        {showPeople && (
          <SearchSortAndFilter
            title={"People"}
            dataSource={people}
            initialSearchQuery={""}
            searchProperties={["firstName", "lastName"]}
            initialSortProperties={{
              property: "firstName",
              isDescending: false,
            }}
            initialFilterProperties={[]}
          >
            {(person) => (
              <div
                key={person.id}
                style={{
                  margin: "1rem 0",
                }}
              >
                <PeopleRenderer {...person} />
              </div>
            )}
          </SearchSortAndFilter>
        )}
      </div>
    </div>
  );
}

export default App;
