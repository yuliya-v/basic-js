import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let chars = new Set(s1);
  let count = 0;
  let a1 = s1.split('');
  let a2 = s2.split('');
  
  for (let char of chars) {
     count += Math.min(a1.filter(el => el === char).length, a2.filter(el => el === char).length);
  }
  return count;
}
