// Status of health
export const indicate = (player) => {
  if (player.health > 50) {
    return 'healthy';
  }
  if (player.health > 14) {
    return 'wounded';
  }

  return 'critical';
};

// Sorting

export const sorting = (players) => players.sort((a, b) => {
  if (a.health > b.health) {
    return -1;
  }
  if (a.health < b.health) {
    return 1;
  }
  return 0;
});
