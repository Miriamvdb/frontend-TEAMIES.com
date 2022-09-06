import { Text } from "../styled";

export const PlayerCard = ({
  firstName,
  lastName,
  line,
  position,
  backNumber,
}) => {
  return (
    <div
      style={{
        width: "175px",
        borderTop: "1px solid #59d6ff",
        padding: "0.5rem 0rem",
      }}
    >
      <Text>
        <b>
          {firstName} {lastName}
        </b>
      </Text>
      <Text>#{backNumber}</Text>
      <Text>{line}</Text>
      <Text>{position}</Text>
    </div>
  );
};
