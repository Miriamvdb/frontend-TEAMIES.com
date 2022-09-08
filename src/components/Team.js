import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPlayers } from "../store/player/selectors";
import { fetchAllPlayers } from "../store/player/thunks";
import { SubContainer, Text, Title } from "../styled";
import { PlayerCard } from "./PlayerCard";

export const Team = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectAllPlayers);
  // console.log("Selected allPlayers?", allPlayers);

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <SubContainer style={{ flex: 3 }}>
      <Title>Team</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5rem",
          overflow: "scroll",
          height: "13rem",
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
    </SubContainer>
  );
};
