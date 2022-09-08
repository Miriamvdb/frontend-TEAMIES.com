import { PartiButtonPr, PartiButtonAb, Text, TextXs } from "../styled";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateParticipation } from "../store/event/thunks";

export const AllEventsCard = ({
  id,
  title,
  opponent,
  home,
  date,
  startTime,
  endTime,
}) => {
  const dispatch = useDispatch();

  // F5: User can specify participation
  const handleUpdateParti = (participation) => {
    dispatch(updateParticipation(id, participation)); // event id from props
  };

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
        {/* F5: User can specify participation (default: null, present, absent) */}
        <PartiButtonPr onClick={() => handleUpdateParti(true)}>
          Present
        </PartiButtonPr>
        <PartiButtonAb onClick={() => handleUpdateParti(false)}>
          Absent
        </PartiButtonAb>
      </div>
    </div>
  );
};
