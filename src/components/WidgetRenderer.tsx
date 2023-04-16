import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IWidget } from "../interfaces";

dayjs.extend(relativeTime);

export function WidgetRenderer(props: IWidget) {
  const { id, created, updated, title, isSpecialCard, description, rating } =
    props;

  return (
    <div
      style={{
        backgroundColor: isSpecialCard ? "#03aa3e" : "#6f6f6f",
        color: "white",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "10px" }}>Title: {title}</h2>
        <div>{description || "null"}</div>
        <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Rating: {rating}/10
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: isSpecialCard ? "#016123" : "#cac8c8",
          padding: "0.5rem",
          color: isSpecialCard ? "white" : "black",
        }}
      >
        <div>#{id}</div>
        <div>
          Updated: {dayjs(updated).fromNow()} | Created:{" "}
          {dayjs(created).fromNow()}
        </div>
      </div>
    </div>
  );
}
