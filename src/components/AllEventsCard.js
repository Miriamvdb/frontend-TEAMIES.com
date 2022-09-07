import { PartiButtonPr, PartiButtonAb, Text, TextXs } from "../styled";
import moment from "moment";

export const AllEventsCard = ({
  title,
  opponent,
  home,
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
        borderTop: "1px solid #59d6ff",
        padding: "0 0 0.25rem 0",
      }}
    >
      <div>
        <Text>{moment(date).format("ddd, MMM Do YYYY")}</Text>
        <Text>
          <b>
            {title === "Match"
              ? home
                ? `EDO VR1 - ${opponent}`
                : `${opponent} - EDO VR1`
              : title}
          </b>
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
