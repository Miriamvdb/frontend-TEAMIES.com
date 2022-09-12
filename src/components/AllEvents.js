import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllEvents } from "../store/event/selectors";
import { fetchAllEvents } from "../store/event/thunks";
import { selectUser } from "../store/user/selectors";
import { ButtonModal, SubContainer, Text, Title } from "../styled";
import { AllEventsCard } from "./";
import { BiListPlus } from "react-icons/bi";

export const AllEvents = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);
  const user = useSelector(selectUser);
  const isAdmin = user ? user.isAdmin : false;

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Title>All events</Title>
        {isAdmin ? (
          <>
            <ButtonModal>
              <BiListPlus />
            </ButtonModal>
          </>
        ) : null}
      </div>
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
