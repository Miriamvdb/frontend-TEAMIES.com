import { ImgM, Text } from "../styled";

export const PlayerCard = ({
  image,
  firstName,
  lastName,
  line,
  position,
  backNumber,
}) => {
  return (
    <div
      style={{
        width: "170px",
      }}
    >
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
