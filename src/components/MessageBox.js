import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectMessage } from "../store/appState/selectors";
import { clearMessage } from "../store/appState/slice";
import { IoClose } from "react-icons/io5";

export const MessageBox = () => {
  const dispatch = useDispatch();

  const message = useSelector(selectMessage);

  const displayMessage = message !== null;

  if (!displayMessage) return null;

  return (
    <MessageContainer message={message}>
      <Text message={message}>{message.text}</Text>
      <Text onClick={() => dispatch(clearMessage())} message={message}>
        <IoClose />
      </Text>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  position: absolute;
  top: 10rem;
  justify-content: space-between;
  background-color: ${(props) =>
    props.message.variant === "success" ? "#8ae3b2" : "#fcb4a7"};
  height: 50px;
  width: 100%;
`;

const Text = styled.p`
  color: ${(props) =>
    props.message.variant === "success" ? "#00873b" : "#ff6347"};
  font-weight: bold;
  margin-top: 0px;
  margin-left: 12rem;
  padding: 15px;
`;
