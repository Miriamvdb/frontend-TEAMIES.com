import { Text, TextXs } from "../styled";
import moment from "moment";

export const MyScheduleCard = ({
  date,
  title,
  home,
  opponent,
  startTime,
  endTime,
}) => {
  return (
    <div
      style={{
        borderTop: "1px solid #59d6ff",
        padding: "0 0 0.5rem 0",
      }}
    >
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
        {startTime?.slice(0, 5)} - {endTime?.slice(0, 5)}
      </TextXs>
    </div>
  );
};
