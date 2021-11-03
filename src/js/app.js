// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

// Status of health
export const indicate = function (player) {
  if (player.health > 50) {
    return 'healthy';
  }
  if (player.health > 14) {
    return 'wounded';
  }

  return 'critical';
};

// Sorting

export const sorting = function (players) {
  return players.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
    return 0;
  });
};
