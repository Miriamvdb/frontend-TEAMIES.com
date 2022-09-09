// export const selectAllPlayers = (reduxState) => reduxState.player.allPlayers;

// Select all players - sorted by firstName
export const selectAllPlayers = (reduxState) => {
  const allPlayers = [...reduxState.player.allPlayers];
  return allPlayers.sort((playerA, playerB) =>
    playerA.line.localeCompare(playerB.line)
  );
};
