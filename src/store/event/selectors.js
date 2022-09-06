export const selectAllEvents = (reduxState) => reduxState.event.allEvents;

// Select all events - sorted by date // fix in backend yet..
// export const selectAllEvents = (reduxState) => {
//   const eventSortByDate = [...reduxState.event.allEvents];
//   return eventSortByDate.sort((eventA, eventB) => eventB.date - eventA.date);
// };
