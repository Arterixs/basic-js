const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let count = 0
  let res = names.map(item => {
      for (let i = 0; i < names.length; i++) {
        if (item === names[i+1]) {
          count++
          if (count > 1) {
          return item + "(" + `${count-1}` + ")"
          }
        } else {
          return item
        }
      }
  })
  count = 0
  let result = res.map(item => {
      for (let i = 0; i < res.length; i++) {
        if (item === res[i+1]) {
          count++
          if (count > 1) {
          return item + "(" + `${count-1}` + ")"
          }
        } else {
          return item
        }
      }
  })
  return result
}

module.exports = {
  renameFiles
};
