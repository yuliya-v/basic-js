import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  let forbiddenPos = [];
  for (let item of matrix) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === 0) {
        forbiddenPos.push(i);
      }
      if (!forbiddenPos.includes(i)) {
        sum += item[i];
      }
    }
  }
  return sum;
}
