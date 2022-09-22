import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllEvents } from "../store/event/selectors";
import { fetchAllEvents } from "../store/event/thunks";
import { selectUser } from "../store/user/selectors";
import { ModalContainer } from "../styled";
import { AllEventsCard } from ".";
import { Roller } from "react-awesome-spinners";

export const AllEventsMod = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  // F5 User can specify participation
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

  // F14 Driver or not
  const getEventDrivers = (eventId, participation) => {
    const driverForThisEvent = participation?.find(
      (driver) => driver.eventId === eventId
    );
    if (driverForThisEvent?.isDriver) {
      return "driver";
    }
  };

  return (
    <ModalContainer>
      <div
        style={{
          paddingTop: "2rem",
          overflow: "scroll",
          height: "67vh",
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
                  attendees={event.attendees}
                  participation={getEventParticipation(
                    event.id,
                    user.myParticipation
                  )}
                  drivers={getEventDrivers(event.id, user.myParticipation)}
                />
              </div>
            );
          })
        ) : (
          <Roller />
        )}
      </div>
    </ModalContainer>
  );
};
