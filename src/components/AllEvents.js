import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllEvents } from "../store/event/selectors";
import { fetchAllEvents } from "../store/event/thunks";
import { SubContainer, Text, Title } from "../styled";
import { AllEventsCard } from "./AllEventsCard";

export const AllEvents = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);
  // console.log("Selected allEvents?", allEvents);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <SubContainer style={{ flex: 2 }}>
      <Title>All events</Title>
      <div
        style={{
          overflow: "scroll",
          height: "13rem",
        }}
      >
        {allEvents ? (
          allEvents.map((event, index) => {
            return (
              <div key={index}>
                <AllEventsCard
                  title={event.title}
                  opponent={event.opponent}
                  date={event.date}
                  startTime={event.startTime}
                  endTime={event.endTime}
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
