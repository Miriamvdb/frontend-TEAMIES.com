// Select all events - sorted by date
export const selectAllEvents = (reduxState) => {
  const allEventsByDate = [...reduxState.event.allEvents];
  return allEventsByDate.sort(
    (eventA, eventB) => new Date(eventA.date) - new Date(eventB.date)
  );
};

export const selectEventDetails = (reduxState) => reduxState.event.eventDetails;
