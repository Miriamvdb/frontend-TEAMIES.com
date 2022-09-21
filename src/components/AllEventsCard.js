import {
  OpenDetailsButton,
  PartiButtonAbsent,
  PartiButtonOpenA,
  PartiButtonPresent,
  PartiButtonOpenP,
  Text,
  TextXs,
  ButtonModal,
  EventButton,
} from "../styled";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPlayers } from "../store/player/selectors";
import { deleteEvent, updateParticipation } from "../store/event/thunks";
import { IoClose } from "react-icons/io5";
import { EventDetails } from "./";
import { Roller } from "react-awesome-spinners";
import { FiCheckSquare, FiXSquare } from "react-icons/fi";
import { selectTeam } from "../store/team/selectors";
import { selectUser } from "../store/user/selectors";
// import { MdEditNote } from "react-icons/md";

// Modal
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export const AllEventsCard = ({
  id: eventId,
  title,
  opponent,
  home,
  date,
  startTime,
  endTime,
  attendees,
  participation,
}) => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectAllPlayers);
  const myTeam = useSelector(selectTeam);
  const user = useSelector(selectUser);
  const isAdmin = user ? user.isAdmin : false;

  // Modal
  const [open, setOpen] = useState(false);

  // F5: User can specify participation
  const handleUpdateParti = (participation) => {
    dispatch(updateParticipation(eventId, participation)); // event id from props
  };

  // F11: Filter all the players that are already accepted by admin
  const acceptedPlayers = allPlayers.filter((player) => player.accepted);
  if (!acceptedPlayers) return <Roller />;

  // F5: Amount of (updated) attendees
  const presentAttendees = attendees?.filter(
    (a) => a.participating?.participation
  ).length;

  // F12: Admin can delete event
  const handleDeleteEvent = () => {
    dispatch(deleteEvent(eventId));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTop: "1px solid #59d6ff",
        padding: "0 0 0.5rem 0",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text>{moment(date).format("ddd, MMM Do YYYY")}</Text>
          {isAdmin ? (
            <div style={{ position: "relative", top: "0.65rem" }}>
              <EventButton onClick={() => handleDeleteEvent(eventId)}>
                <IoClose style={{ color: "tomato", marginLeft: "1rem" }} />
              </EventButton>
              {/* <EventButton>
                <MdEditNote />
              </EventButton> */}
            </div>
          ) : null}
        </div>
        <OpenDetailsButton onClick={() => setOpen(!open)}>
          <Text>
            <b>
              {title === "Match"
                ? home
                  ? `${myTeam} - ${opponent}`
                  : `${opponent} - ${myTeam}`
                : title}
            </b>
          </Text>
        </OpenDetailsButton>
        <TextXs>
          {startTime?.slice(0, 5)} - {endTime?.slice(0, 5)} | Attendees{" "}
          {presentAttendees} / {acceptedPlayers.length}
        </TextXs>
      </div>
      <Dialog
        aria-label="EventDetails"
        isOpen={open}
        style={{
          width: "auto",
          height: "30rem",
          overflow: "scroll",
          margin: "12rem 20rem 0rem 20rem",
          padding: "0rem",
          borderRadius: "25px",
        }}
      >
        <>
          <ButtonModal
            style={{ position: "absolute", left: "21rem", top: "13rem" }}
            onClick={() => setOpen(false)}
          >
            <IoClose />
          </ButtonModal>
          <EventDetails eventId={eventId} />
        </>
      </Dialog>

      {/* F5: User can specify participation (default: null, present, absent) */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {participation === "open" ? (
          <>
            <PartiButtonOpenP onClick={() => handleUpdateParti(true)}>
              <FiCheckSquare />
            </PartiButtonOpenP>

            <PartiButtonOpenA onClick={() => handleUpdateParti(false)}>
              <FiXSquare />
            </PartiButtonOpenA>
          </>
        ) : (
          <></>
        )}

        {participation === "absent" ? (
          <>
            <PartiButtonOpenP onClick={() => handleUpdateParti(true)}>
              <FiCheckSquare />
            </PartiButtonOpenP>
            <PartiButtonAbsent onClick={() => handleUpdateParti(false)}>
              <FiXSquare />
            </PartiButtonAbsent>
          </>
        ) : (
          <></>
        )}

        {participation === "present" ? (
          <>
            <PartiButtonPresent onClick={() => handleUpdateParti(true)}>
              <FiCheckSquare />
            </PartiButtonPresent>

            <PartiButtonOpenA onClick={() => handleUpdateParti(false)}>
              <FiXSquare />
            </PartiButtonOpenA>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
