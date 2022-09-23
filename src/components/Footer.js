import { Text } from "../styled";

export const Footer = () => {
  return (
    <Text
      style={{
        textAlign: "center",
        marginLeft: "25%",
        paddingBottom: "5rem",
        opacity: "75%",
      }}
    >
      &copy; {new Date().getFullYear()} <b>TEAMIES</b> developed by Miriam van
      den Bosch
    </Text>
  );
};
