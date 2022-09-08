import { Text } from "../styled";

export const Footer = () => {
  return (
    <Text
      style={{
        textAlign: "center",
        marginLeft: "25%",
        paddingBottom: "5rem",
        opacity: "50%",
      }}
    >
      Copyright &copy; {new Date().getFullYear()} <b>TEAMIES.com</b>
    </Text>
  );
};
