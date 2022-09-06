import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPlayers } from "../store/player/thunks";
import { SubContainer, Title } from "../styled";

export const Team = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <SubContainer style={{ flex: 3 }}>
      <Title>Team</Title>
    </SubContainer>
  );
};
