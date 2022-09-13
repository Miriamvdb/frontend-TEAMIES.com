import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { SubContainer, Text, Title } from "../styled";
import { Roller } from "react-awesome-spinners";
import { MyScheduleCard } from "./MyScheduleCard";
import { CgSmileMouthOpen } from "react-icons/cg";

export const MySchedule = () => {
  const me = useSelector(selectUser);

  return (
    <SubContainer style={{ flex: 1 }}>
      <Title>My schedule </Title>
      <div
        style={{
          overflow: "scroll",
          height: "24vh",
        }}
      >
        {me ? (
          me.mySchedule?.length === 0 ? (
            <>
              <Text>Come on, get off that lazy ass!</Text>
              <Text>The trainer will be very disapointed...</Text>
              <Text>You like it to be a substitute?</Text>
              <Title>
                <CgSmileMouthOpen />
              </Title>
            </>
          ) : (
            me.mySchedule?.map((mS, index) => {
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
