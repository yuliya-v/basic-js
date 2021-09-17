import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (!arr.find(item => Array.isArray(item))) return 1;
    let max = 1;
    for (let item of arr.filter(item => Array.isArray(item))) {
        let res = this.calculateDepth(item) + 1;
        if (res > max) max = res;
    }
    return max;
  }
}
