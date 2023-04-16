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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: "1rem",
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
            initialSortProperties={{ property: "firstName", isDescending: false }}
            initialFilterProperties={[]}
          >
            {(person) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: "1rem",
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
