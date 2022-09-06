import { PartiButtonPr, PartiButtonAb, Text, TextXs } from "../styled";

export const AllEventsCard = ({
  title,
  opponent,
  date,
  startTime,
  endTime,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTop: "1px solid #00bfff",
        padding: "0 0 0.75rem 0",
      }}
    >
      <div>
        <Text>{date}</Text>
        <Text>
          <b>{title === "Match" ? opponent : title}</b>
        </Text>
        <TextXs>
          {startTime.slice(0, 5)} - {endTime.slice(0, 5)}
        </TextXs>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <PartiButtonPr>P R E S E N T</PartiButtonPr>
        <PartiButtonAb>A B S E N T</PartiButtonAb>
      </div>
    </div>
  );
};
