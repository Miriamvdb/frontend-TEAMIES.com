import { AccUserButton, DelUserButton, Text } from "../styled";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { acceptNewPlayer, deletePlayer } from "../store/player/thunks";

export const PendingUser = ({ id: playerId, firstName, lastName, email }) => {
  const dispatch = useDispatch();

  // F11: As an admin, I can ACCEPT new registrations
  const handleAcceptPlayer = (accepted) => {
    dispatch(acceptNewPlayer(playerId, accepted));
  };

  // F11: As an admin, I can DELETE new registrations
  const handleDeletePlayer = () => {
    dispatch(deletePlayer(playerId));
  };

  return (
    <div>
      <Text>
        <b>
          {firstName} {lastName}
        </b>
      </Text>
      <Text>{email}</Text>

      <AccUserButton onClick={() => handleAcceptPlayer(true)}>
        <FiUserCheck />
      </AccUserButton>
      <DelUserButton onClick={() => handleDeletePlayer(playerId)}>
        <FiUserX />
      </DelUserButton>
    </div>
  );
};
