import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPlayers } from "../store/player/selectors";
import { fetchAllPlayers } from "../store/player/thunks";
import { ModalContainer, TitleH2 } from "../styled";
import { PlayerCard } from "./PlayerCard";
import { Roller } from "react-awesome-spinners";
import { selectTeam } from "../store/team/selectors";

export const TeamMod = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectAllPlayers);
  const myTeam = useSelector(selectTeam);

  // F11: Filter all the players that are accepted by admin
  const allPlayersAccepted = allPlayers.filter((player) => player.accepted);

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <ModalContainer>
      <TitleH2>{myTeam} team</TitleH2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: "5rem",
          gap: "5rem",
          overflow: "scroll",
          height: "64vh",
          justifyContent: "center",
        }}
      >
        {allPlayersAccepted ? (
          allPlayersAccepted.map((player, index) => {
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
    </ModalContainer>
  );
};
