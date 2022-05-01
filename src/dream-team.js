const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(name) {
  if (Array.isArray(name) === false) {
    return false
  } 
  let arr = []
   name.map(item => {
    if (typeof(item) === 'string') {
      arr.push(item.trim().toUpperCase()[0])
    }
  })
  let result = arr.sort().join('')
  return result
}

module.exports = {
  createDreamTeam
};
