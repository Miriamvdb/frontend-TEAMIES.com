export const selectTeam = (reduxState) =>
  reduxState.team.myTeam.map((team) => team.name);
