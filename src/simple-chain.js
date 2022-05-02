const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  res : "",
  getLength() {
    return this.result.length
  },
  addLink(value) {
    this.result.push("~" + "( " + value + " )" + "~")
    return this
  },
  removeLink(position) {
    if (typeof(position) !== "number" || isNaN(position) || position > this.result.length || Number.isInteger(position) === false || position <= 0) {
      this.result.splice(0, this.result.length)
      throw new Error('You can\'t remove incorrect link!')
    } else {
      this.result.splice(position - 1,1)
      return this
    }
  },
  reverseChain() {
    this.result.reverse()
    return this
  },
  finishChain() {
    if (this.result.length === 1) {
      this.result.splice(0,1, this.result[0].replace(/~/g, "") )
      this.res = this.result.join("")
      this.result.splice(0, this.result.length)
      return this.res
    } else {
    this.result.splice(0,1, this.result[0].replace(/~/, "") )
    this.result.splice(-1, 1, "~" + this.result[this.result.length-1].replace(/~/g, ""))
    this.res = this.result.join("")
    this.result.splice(0, this.result.length)
   return this.res
    }
  }
  
};

module.exports = {
  chainMaker
};
