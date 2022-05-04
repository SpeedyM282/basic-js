const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  return typeof date !== Object ? 'Unable to determine the time of year!' : month == 11 || month >= 0 && month < 2 ? 'winter' : month >= 2 && month < 5 ? 'spring' : month >= 5 && month < 8 ? 'summer' : month >= 8 && month < 11 ? 'autumn';
}

module.exports = {
  getSeason
};
