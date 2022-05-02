const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
   } ;
  let arr1 = arr.slice(0)
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === '--double-next') {
      if (arr1[i+2] === '--discard-prev' ) {
        arr1.splice(i,3,arr1[i+1])
      }
      else if (arr1[arr1.length-1] === '--double-next') {
        arr1.splice(i,1)
      }
      else {
        arr1.splice(i,1,arr1[i+1])
      }
    }
    if (arr1[i] === '--double-prev') {
      if (arr1[0] === '--double-prev') {
        arr1.splice(i, 1)
      } else {
        arr1.splice(i, 1, arr1[i-1])
      }
      
    }
    if (arr1[i] === '--discard-prev') {
      if (arr1[0] === '--discard-prev') {
        arr1.splice(i, 1)
      } else {
        arr1.splice(i-1, 2)
      }
    }
    if (arr1[i] === '--discard-next') {
      if (arr1[i+2] === '--double-prev' || arr1[i+2] === '--discard-prev'){
        arr1.splice(i, 3)
      } else {
        arr1.splice(i, 2)
      }
    }
  }
  return arr1
}

module.exports = {
  transform
};
