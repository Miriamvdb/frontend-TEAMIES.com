import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPlayers } from "../store/player/selectors";
import { fetchAllPlayers } from "../store/player/thunks";
import { ButtonModal, SubContainer, TitleH2 } from "../styled";
import { PlayerCard } from "./PlayerCard";
import { CgPlayListSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Roller } from "react-awesome-spinners";

// Modal
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { TeamMod } from "./TeamMod";
import { selectTeam } from "../store/team/selectors";

export const Team = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectAllPlayers);
  const myTeam = useSelector(selectTeam);

  // F11: Filter all the players that are already accepted by admin
  const acceptedPlayers = allPlayers.filter((player) => player.accepted);

  // Modal
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <SubContainer style={{ flex: 2 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TitleH2>{myTeam} team</TitleH2>
        <ButtonModal onClick={() => setOpen(!open)}>
          <CgPlayListSearch />
        </ButtonModal>
        <Dialog
          aria-label="TeamDetails"
          isOpen={open}
          style={{
            width: "auto",
            height: "auto",
            margin: "5rem",
            padding: "0rem",
            borderRadius: "25px",
            transition: "transform 2s",
          }}
        >
          <>
            <ButtonModal
              style={{ position: "absolute", left: "6rem", top: "6rem" }}
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </ButtonModal>
            <TeamMod />
          </>
        </Dialog>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2.5rem",
          overflow: "scroll",
          height: "20vh",
        }}
      >
        {acceptedPlayers ? (
          acceptedPlayers.map((player, index) => {
            return (
              <div key={index}>
                <PlayerCard
                  id={player.id}
                  image={player.image}
                  firstName={player.firstName}
                  lastName={player.lastName}
                  line={player.line}
                  position={player.position}
                  backNumber={player.backNumber}
                />
              </div>
            );
          })
        ) : (
          <Roller />
        )}
      </div>
    </SubContainer>
  );
};
