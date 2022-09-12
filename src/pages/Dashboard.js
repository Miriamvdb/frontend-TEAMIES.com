import { AllEvents, MyProfile, MySchedule, Team } from "../components";
import { DashboardContainer } from "../styled";

export const Dashboard = () => {
  return (
    <DashboardContainer
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
        <MyProfile />
        <AllEvents />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
        <Team />
        <MySchedule />
      </div>
    </DashboardContainer>
  );
};
