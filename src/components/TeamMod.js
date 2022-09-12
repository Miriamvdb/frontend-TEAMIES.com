import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPlayers } from "../store/player/selectors";
import { fetchAllPlayers } from "../store/player/thunks";
import { ModalContainer, Text } from "../styled";
import { PlayerCard } from "./PlayerCard";

export const TeamMod = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectAllPlayers);

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <ModalContainer>
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
        {allPlayers ? (
          allPlayers.map((player, index) => {
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
          <Text>Loading..</Text>
        )}
      </div>
    </ModalContainer>
  );
};
