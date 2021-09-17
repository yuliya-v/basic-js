import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  length: 0,
  chain: '',

  getLength() {
    return this.length;
  },

  addLink(value) {
    if (this.length === 0) {
      this.chain += `( ${value} )`;
    } else {
    this.chain += `~~( ${value} )`;
    }
    this.length++;
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || (position > this.length) || (position < 1)) {
      this.chain = '';
      this.length = 0;
      throw new Error ("You can't remove incorrect link!");}
    else {
      let arr = this.chain.split('~~');
      arr.splice(position - 1, 1);
      this.chain = arr.join('~~');
      this.length--;
      return this;
    }
  },

  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },

  finishChain() {
    let result = this.chain;
    this.chain = '';
    this.length = 0;
    return result;
  }
};
