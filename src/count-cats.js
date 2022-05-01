const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(twoDimArr) {
  let count = 0;
  twoDimArr.forEach(e => e.forEach(el => typeof el === 'string' && el.includes("^^") && !el.includes(" ^^ ") && !el.includes("^^ ") && !el.includes(" ^^") ? count++ : count));
  return count;
}

module.exports = {
  countCats
};
