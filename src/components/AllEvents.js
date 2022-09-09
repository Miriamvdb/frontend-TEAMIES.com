import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllEvents } from "../store/event/selectors";
import { fetchAllEvents } from "../store/event/thunks";
import { selectUser } from "../store/user/selectors";
import { SubContainer, Text, Title } from "../styled";
import { AllEventsCard } from "./AllEventsCard";

export const AllEvents = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const getEventParticipation = (eventId, participations) => {
    const participationsForThisEvent = participations?.find(
      (participation) => participation.eventId === eventId
    );
    if (!participationsForThisEvent) {
      return "open";
    } else {
      if (participationsForThisEvent.participation) {
        return "present";
      } else {
        return "absent";
      }
    }
  };

  return (
    <SubContainer style={{ flex: 3 }}>
      <Title>All events</Title>
      <div
        style={{
          overflow: "scroll",
          height: "13rem",
        }}
      >
        {allEvents && user ? (
          allEvents.map((event, index) => {
            return (
              <div key={index}>
                <AllEventsCard
                  id={event.id}
                  title={event.title}
                  opponent={event.opponent}
                  home={event.home}
                  date={event.date}
                  startTime={event.startTime}
                  endTime={event.endTime}
                  // attendees={event.attendees.map((a) => {
                  //   return a.participating.participation;
                  // })}
                  participation={getEventParticipation(
                    event.id,
                    user.myParticipation
                  )}
                />
              </div>
            );
          })
        ) : (
          <Text>Loading..</Text>
        )}
      </div>
    </SubContainer>
  );
};
