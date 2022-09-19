import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { SubContainer, Text, TitleH2 } from "../styled";
import { Roller } from "react-awesome-spinners";
import { MyScheduleCard } from "./MyScheduleCard";

export const MySchedule = () => {
  const me = useSelector(selectUser);

  return (
    <SubContainer style={{ flex: 1 }}>
      <TitleH2>My schedule </TitleH2>
      <div
        style={{
          overflow: "scroll",
          height: "24vh",
        }}
      >
        {me && me.mySchedule ? (
          me.mySchedule.length === 0 ? (
            <>
              <Text>Come on, get off that lazy ass!</Text>
              <Text>The trainer will be very disapointed...</Text>
              <Text>You like it to be a substitute?</Text>
            </>
          ) : (
            [...me.mySchedule]
              ?.sort(
                (eventA, eventB) =>
                  new Date(eventA.date) - new Date(eventB.date)
              )
              .map((mS, index) => {
                return (
                  <div key={index}>
                    <MyScheduleCard
                      id={mS.id}
                      date={mS.date}
                      title={mS.title}
                      home={mS.home}
                      opponent={mS.opponent}
                      startTime={mS.startTime}
                      endTime={mS.endTime}
                    />
                  </div>
                );
              })
          )
        ) : (
          <Roller />
        )}
      </div>
    </SubContainer>
  );
};
