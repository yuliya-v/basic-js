import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let result = [];
  // arr.forEach(item => {
  //   if (typeof item === 'number') result.push(item);
  //   else {
  //     switch (item) {
  //       case '--discard-next':
  //       case '--discard-prev':
  //     }
  //   }
  // })
  for (let i = 0; i < arr.length; i++) {
   
      switch (arr[i]) {
        case '--discard-next':
          result.push(undefined);
          i++;
          break;
        case '--discard-prev':
          if (arr[i - 1]) result.pop();
          break;
        case '--double-next':
          result.push(arr[i + 1]);
          break;
        case '--double-prev':
          result.push(result[result.length- 1]);
          break;
        default:
          result.push(arr[i]); 
      }
      
    }

  return result.filter(item => item);
}

