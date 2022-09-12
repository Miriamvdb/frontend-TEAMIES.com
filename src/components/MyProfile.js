import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { ImgM, SubContainer, Text } from "../styled";

export const MyProfile = () => {
  const me = useSelector(selectUser);

  if (!me) return;
  const { image, firstName, lastName, line, position, backNumber } = me;

  return (
    <SubContainer style={{ paddingTop: "2rem", flex: 1 }}>
      {me ? (
        <div>
          <ImgM src={image} alt="" />
          <Text
            style={{
              fontSize: "10rem",
              position: "absolute",
              opacity: "15%",
              fontWeight: "bold",
              top: "10rem",
              left: "13rem",
            }}
          >
            {backNumber === null ? "" : `${backNumber}`}
          </Text>
          <Text>
            <b>
              {firstName} {lastName}
            </b>
          </Text>
          <Text>
            <b>Line </b>
            {line}
          </Text>
          <Text>
            <b>Position </b> {position}
          </Text>
        </div>
      ) : (
        <Text>Loading...</Text>
      )}
    </SubContainer>
  );
};
