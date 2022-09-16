import { Text, TextXs } from "../styled";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectTeam } from "../store/team/selectors";

export const MyScheduleCard = ({
  date,
  title,
  home,
  opponent,
  startTime,
  endTime,
}) => {
  const myTeam = useSelector(selectTeam);

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
              ? `${myTeam} - ${opponent}`
              : `${opponent} - ${myTeam}`
            : title}
        </b>
      </Text>
      <TextXs>
        {startTime?.slice(0, 5)} - {endTime?.slice(0, 5)}
      </TextXs>
    </div>
  );
};
