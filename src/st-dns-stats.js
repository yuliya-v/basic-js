import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
let obj = {};

for (let item of domains) {
  let test = item.split('.').reverse();
  let testStr = '';
  
  for (let i = 0; i < test.length; i++) {
    testStr += '.' + test[i];
    obj[testStr] ? obj[testStr]++ : obj[testStr] = 1;
  }
}
return obj;
}
