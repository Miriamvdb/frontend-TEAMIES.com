export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.profile;

// Select my schedule - sorted by date
export const selectMySchedule = (reduxState) => {
  const myScheduleByDate = [...reduxState.user.profile.mySchedule];
  return myScheduleByDate.sort(
    (eventA, eventB) => new Date(eventA.date) - new Date(eventB.date)
  );
};
