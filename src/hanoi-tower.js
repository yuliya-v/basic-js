import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: 3,
    seconds: 0,
  };
  for (let i = 3; i <= disksNumber; i++) {
    result.turns += result.turns + 1;
  }
  result.seconds = Math.floor(result.turns / (turnsSpeed / 60 / 60));
  return result;
}
