import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEventDetails } from "../store/event/selectors";
import { fetchEventDetails } from "../store/event/thunks";
import { ModalContainerXS, Text, TextLH, TextList, TitleH2 } from "../styled";
import moment from "moment";
import { Roller } from "react-awesome-spinners";
import { selectTeam } from "../store/team/selectors";

export const EventDetails = ({ eventId }) => {
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectEventDetails);
  const myTeam = useSelector(selectTeam);

  useEffect(() => {
    dispatch(fetchEventDetails(eventId));
  }, [dispatch, eventId]);

  if (!eventDetails) return <Roller />;

  const { title, date, opponent, home, startTime, endTime, descr, attendees } =
    eventDetails;

  // Array present attendees
  const presentAttendees = attendees?.filter(
    (a) => a.participating?.participation
  );

  // Array present attendees
  const driverAttendees = attendees?.filter((a) => a.participating?.isDriver);

  return (
    <ModalContainerXS style={{ height: "100%" }}>
      <Text>
        {moment(date).format("ddd, MMM Do YYYY")}, {startTime?.slice(0, 5)} -{" "}
        {endTime?.slice(0, 5)}
      </Text>
      <TitleH2>
        {title === "Match"
          ? home
            ? `${myTeam} - ${opponent}`
            : `${opponent} - ${myTeam}`
          : title}
      </TitleH2>
      <TextLH>{descr === null ? "" : `${descr}`}</TextLH>
      <br />
      <div style={{ display: "flex", gap: "3rem" }}>
        <TextList>
          Attendees |{" "}
          {presentAttendees.length === 0 ? (
            <Text>
              <em>No attendees yet...</em>
            </Text>
          ) : (
            presentAttendees.length
          )}
          {presentAttendees.map((a, index) => (
            <Text key={index}>{a.firstName}</Text>
          ))}
        </TextList>
        {title === "Match" ? (
          home ? null : (
            <TextList>
              Drivers |{" "}
              {driverAttendees.length === 0 ? (
                <Text>
                  <em>No drivers yet...</em>
                </Text>
              ) : (
                driverAttendees.length
              )}
              {driverAttendees.map((a, index) => (
                <Text key={index}>{a.firstName}</Text>
              ))}
            </TextList>
          )
        ) : null}
      </div>
    </ModalContainerXS>
  );
};
