import { AllEvents, MyProfile, MySchedule, Team } from "../components";
import { MainContainer } from "../styled";

export const Dashboard = () => {
  return (
    <MainContainer
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
        <MyProfile />
        <Team />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
        <AllEvents />
        <MySchedule />
      </div>
    </MainContainer>
  );
};
