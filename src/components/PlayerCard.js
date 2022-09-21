import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deletePlayer } from "../store/player/thunks";
import { selectUser } from "../store/user/selectors";
import { EventButton, ImgM, Text } from "../styled";

export const PlayerCard = ({
  id: playerId,
  image,
  firstName,
  lastName,
  line,
  position,
  backNumber,
}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAdmin = user ? user.isAdmin : false;

  // F13: Admin can delete player
  const handleDeletePlayer = () => {
    dispatch(deletePlayer(playerId));
  };

  return (
    <div
      style={{
        width: "170px",
      }}
    >
      {isAdmin ? (
        <div style={{ position: "relative", top: "2.5rem", left: "9rem" }}>
          <EventButton onClick={() => handleDeletePlayer(playerId)}>
            <IoClose style={{ color: "tomato" }} />
          </EventButton>
          {/* <EventButton>
                <MdEditNote />
              </EventButton> */}
        </div>
      ) : null}
      <ImgM src={image} alt="" />
      <Text>
        <b>
          {firstName} {lastName}
        </b>
      </Text>
      <Text>{backNumber === null ? "" : `${backNumber}`}</Text>
      <Text>{line}</Text>
      <Text>{position}</Text>
    </div>
  );
};
