const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let ind = email.indexOf("@")
  let ver = email.slice(`${ind + 1}`)
  if (ver.indexOf("@") === -1) return ver
  else return recurs(ver)
    function recurs (ver) {
      let index = ver.indexOf("@")
      ver = ver.slice((`${index + 1}`))
      if (ver.indexOf("@") === -1) return ver
      else recurs(ver)
    }
}

module.exports = {
  getEmailDomain
};
