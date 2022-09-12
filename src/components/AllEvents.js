import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllEvents } from "../store/event/selectors";
import { fetchAllEvents } from "../store/event/thunks";
import { selectUser } from "../store/user/selectors";
import { ButtonModal, SubContainer, Text, Title } from "../styled";
import { AllEventsCard, AllEventsMod, NewEventForm } from "./";
import { CgPlayListSearch, CgPlayListAdd } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

// Modal
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export const AllEvents = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);
  const user = useSelector(selectUser);
  const isAdmin = user ? user.isAdmin : false;

  // Modal
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

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
          alignItems: "center",
        }}
      >
        <Title>All events</Title>
        <div>
          {isAdmin ? (
            <>
              <ButtonModal onClick={() => setOpen(!open)}>
                <CgPlayListAdd />
              </ButtonModal>
              <Dialog
                aria-label="NewEventForm"
                isOpen={open}
                style={{
                  width: "auto",
                  height: "auto",
                  margin: "5rem",
                  padding: "0rem",
                  borderRadius: "25px",
                }}
              >
                <>
                  <ButtonModal
                    style={{ position: "absolute", left: "6rem", top: "6rem" }}
                    onClick={() => setOpen(false)}
                  >
                    <IoClose />
                  </ButtonModal>
                  <NewEventForm />
                </>
              </Dialog>
            </>
          ) : null}

          <ButtonModal onClick={() => setOpen2(!open2)}>
            <CgPlayListSearch />
          </ButtonModal>
          <Dialog
            aria-label="AllEventsMod"
            isOpen={open2}
            style={{
              width: "auto",
              height: "auto",
              margin: "5rem",
              padding: "0rem",
              borderRadius: "25px",
            }}
          >
            <>
              <ButtonModal
                style={{ position: "absolute", left: "6rem", top: "6rem" }}
                onClick={() => setOpen2(false)}
              >
                <IoClose />
              </ButtonModal>
              <AllEventsMod />
            </>
          </Dialog>
        </div>
      </div>
      <div
        style={{
          overflow: "scroll",
          height: "24vh",
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
