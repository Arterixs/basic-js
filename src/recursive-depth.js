const { NotImplementedError } = require('../extensions/index.js');

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
 
class DepthCalculator {
  constructor(arr){this.arr = arr, this.count = 1, this.max = 0}
  calculateDepth(arr = this.arr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      this.max = Math.max(this.calculateDepth(item), this.max)
    }
  }

  return this.count + this.max
  }
}

module.exports = {
  DepthCalculator
};
