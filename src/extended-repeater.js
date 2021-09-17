import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let addStr;
  
  if ('addition' in options) {
    let add = new Array(options.additionRepeatTimes ? options.additionRepeatTimes : 1);
    add.fill('' + options.addition);
    addStr = options.additionSeparator ? add.join(options.additionSeparator) : add.join('|');
  }

  let arr = new Array(options.repeatTimes ? options.repeatTimes : 1);
  addStr ? arr.fill('' + str + addStr) : arr.fill('' + str);
  let result = options.separator ? arr.join(options.separator) : arr.join('+');

  return result;
  
}
