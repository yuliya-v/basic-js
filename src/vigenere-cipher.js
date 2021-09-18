import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

export default class VigenereCipheringMachine {

  constructor (arg) {
    if (arg === false) this.type = 'reverse';
    else this.type = 'direct';
    this.alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {

    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = '';
    message = message.toUpperCase();
    
    while (key.length < message.length) {
      key += key; 
    }
    key = key.toUpperCase().substr(0, message.length);
    
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if (!this.alph.includes(message[i])) {
        result += message[i];
        j--;
      } else {
        result += this.alph[(this.alph.indexOf(message[i]) + this.alph.indexOf(key[j])) % 26];
      }
    }

    return this.type === 'direct' ? result : result.split('').reverse().join('');
  }

  decrypt(string, key) {
    if (!string || !key) throw new Error('Incorrect arguments!'); 

    let result = '';
    string = string.toUpperCase();
    
    while (key.length < string.length) {
      key += key; 
    }
    key = key.toUpperCase().substr(0, string.length);

    for (let i = 0, j = 0; i < string.length; i++, j++) {
      if (!this.alph.includes(string[i])) {
        result += string[i];
        j--;
      } else {
        result += this.alph[(this.alph.indexOf(string[i]) - this.alph.indexOf(key[j]) + 26) % 26];
      }
    }

    return this.type === 'direct' ? result : result.split('').reverse().join('');
  }
}
