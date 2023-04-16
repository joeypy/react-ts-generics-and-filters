import IPerson from "../interfaces/IPerson";
import dayjs from "dayjs";

export function PeopleRenderer({
  firstName,
  lastName,
  birthday,
  eyeColor,
}: IPerson) {
  return (
    <div>
      <div
        style={{
          color: "white",
          borderRadius: "5px",
          overflow: "hidden",
          backgroundColor: "gray",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
          }}
        >
          <h2 style={{ margin: 0 }}>
            😎 {firstName} {lastName}
          </h2>
          <ul style={{ listStyle: "none" }}>
            <li>
              👀 Has <b>{eyeColor}</b> eyes
            </li>
            <li>
              🎂 Birthday: <b>{dayjs(birthday).format("MMMM D, YYYY")}</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
