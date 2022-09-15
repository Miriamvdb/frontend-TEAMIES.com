import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPlayers } from "../store/player/selectors";
import { fetchAllPlayers } from "../store/player/thunks";
import { MainContainer, Text, TitleH1 } from "../styled";
import { Roller } from "react-awesome-spinners";
import { PendingUser } from "../components/PendingUser";

export const Admin = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectAllPlayers);

  // F11: Filter all the pending players (accepted === false)
  const playersToAccept = allPlayers.filter((player) => !player.accepted);

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <MainContainer
      style={{
        overflow: "scroll",
        height: "61vh",
      }}
    >
      <TitleH1>New pending users</TitleH1>
      {playersToAccept ? (
        playersToAccept.length === 0 ? (
          <>
            <Text>
              <em>There are no new registrations to review...</em>
            </Text>
          </>
        ) : (
          playersToAccept.map((player, index) => {
            return (
              <div key={index}>
                <PendingUser
                  id={player.id}
                  firstName={player.firstName}
                  lastName={player.lastName}
                  email={player.email}
                />
              </div>
            );
          })
        )
      ) : (
        <Roller />
      )}
    </MainContainer>
  );
};
