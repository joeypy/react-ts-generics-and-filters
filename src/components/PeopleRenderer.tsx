import dayjs from "dayjs";
import { IPerson } from "../interfaces";

export function PeopleRenderer(props: IPerson) {
  const { firstName, lastName, birthday, eyeColor } = props;
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
