const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let count = 1
  let res = matrix.map(item => {
    for (let j = 0; j < item.length; j++) {
      if (item[j-1] === true || item[j+1] === true) {
       item.splice(j,1,count)
      } else {
        if (item[j] !== true) {
        item.splice(j,1,0)
        }
      }
    }
      return item
  })
  
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[1][j] === true) {
        if (matrix[0][j+1] !== true) {
          count === 1 ? count++ : count = 1
          matrix[0].splice(j+1,1,count)
        }
        if ((matrix[0][j] !== true)) {
          count === 1 ? count++ : count = 1
          matrix[0].splice(j,1,count)
        }
        if ((matrix[0][j-1] !== true)) {
          count === 1 ? count++ : count = 1
          matrix[0].splice(j-1,1,count)
        }
      }
      if (matrix[i-1][j] === true) {
        count === 1 ? count++ : count = 1
        matrix[i].splice(j, 1, count)
        if (matrix[i][j+1] !== true && matrix[i][j-1] !== true) {
          matrix[i].splice(j+1,1,count)
          matrix[i].splice(j-1,1,count)
        }
      }
    }
  }
  let arr = matrix.slice(0)
   for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
     if (arr[i][j] === true) {
       arr[i].splice(j,1,1)
     }
    }
   }
  return arr
}

module.exports = {
  minesweeper
};
