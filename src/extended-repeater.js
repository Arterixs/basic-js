const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  if (!("separator" in options)) {
    options.separator = "+"
  }
  if (!("additionSeparator" in options)) {
    options.additionSeparator = "|"
  }
  if (!("repeatTimes" in options)) {
    options.repeatTimes = 1
  }
  if (!("additionRepeatTimes" in options)) {
    options.additionRepeatTimes = 1
  }
  let result = ""
  let add = ""

  if ("addition" in options) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      add = `${add}${options.addition}${options.additionSeparator}`
    }
  }

  add = add.slice(0, add.length - options.additionSeparator.length)
    
  for (let i = 0; i < options.repeatTimes; i++) {
    result = `${result}${str}${add}${options.separator}`
  }
  result = result.slice(0, result.length - options.separator.length)

  return result
}

module.exports = {
  repeater
};
