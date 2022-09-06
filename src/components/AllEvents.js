import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllEvents } from "../store/event/thunks";
import { SubContainer, Title } from "../styled";

export const AllEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <SubContainer style={{ flex: 2 }}>
      <Title>All events</Title>
    </SubContainer>
  );
};
