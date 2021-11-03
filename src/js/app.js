// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export const indicate = function (player) {
    if (player.health > 50) {
        return 'healthy'
    }
    if (player.health > 14) {
        return 'wounded'
    }
    else {
        return 'critical'
    }
}

