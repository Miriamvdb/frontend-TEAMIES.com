import { MainContainer, Text, TitleH1 } from "../styled";

export const SignUpSuccess = () => {
  return (
    <MainContainer
      style={{
        overflow: "scroll",
        height: "61vh",
      }}
    >
      <TitleH1>Thanks for your registration!</TitleH1>
      <Text style={{ fontSize: "1rem" }}>
        The administrator will review your application and let you know soon
      </Text>
    </MainContainer>
  );
};
