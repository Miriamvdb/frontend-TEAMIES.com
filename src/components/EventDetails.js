import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEventDetails } from "../store/event/selectors";
import { fetchEventDetails } from "../store/event/thunks";
import { ModalContainer, Text, TextLH, TextList, Title } from "../styled";
import moment from "moment";
import { Roller } from "react-awesome-spinners";

export const EventDetails = ({ eventId }) => {
  const dispatch = useDispatch();
  const eventDetails = useSelector(selectEventDetails);

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

  return (
    <ModalContainer style={{ height: "100%" }}>
      <Text>
        {moment(date).format("ddd, MMM Do YYYY")}, {startTime?.slice(0, 5)} -{" "}
        {endTime?.slice(0, 5)}
      </Text>
      <Title>
        {title === "Match"
          ? home
            ? `EDO VR1 - ${opponent}`
            : `${opponent} - EDO VR1`
          : title}
      </Title>
      <TextLH>{descr === null ? "" : `${descr}`}</TextLH>
      <br />
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
    </ModalContainer>
  );
};
