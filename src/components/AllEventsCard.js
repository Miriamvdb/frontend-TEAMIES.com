import {
  PartiButtonAbsent,
  PartiButtonOpen,
  PartiButtonPresent,
  Text,
  TextXs,
} from "../styled";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPlayers } from "../store/player/selectors";
import { updateParticipation } from "../store/event/thunks";

export const AllEventsCard = ({
  id,
  title,
  opponent,
  home,
  date,
  startTime,
  endTime,
  // attendees,
  participation,
}) => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectAllPlayers);

  // F5: User can specify participation
  const handleUpdateParti = (participation) => {
    dispatch(updateParticipation(id, participation)); // event id from props
  };

  if (!allPlayers) return <Text>Loading...</Text>;

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
          {startTime?.slice(0, 5)} - {endTime?.slice(0, 5)} | Attendees{" "}
          {/* {attendees.length} /  */}
          {allPlayers.length}
        </TextXs>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* F5: User can specify participation (default: null, present, absent) */}
        {participation === "open" ? (
          <>
            <PartiButtonOpen onClick={() => handleUpdateParti(true)}>
              Present
            </PartiButtonOpen>

            <PartiButtonOpen onClick={() => handleUpdateParti(false)}>
              Absent
            </PartiButtonOpen>
          </>
        ) : (
          <></>
        )}

        {participation === "absent" ? (
          <>
            <PartiButtonOpen onClick={() => handleUpdateParti(true)}>
              Present
            </PartiButtonOpen>
            <PartiButtonAbsent onClick={() => handleUpdateParti(false)}>
              Absent
            </PartiButtonAbsent>
          </>
        ) : (
          <></>
        )}

        {participation === "present" ? (
          <>
            <PartiButtonPresent onClick={() => handleUpdateParti(true)}>
              Present
            </PartiButtonPresent>

            <PartiButtonOpen onClick={() => handleUpdateParti(false)}>
              Absent
            </PartiButtonOpen>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
