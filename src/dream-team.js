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
function createDreamTeam(members) {
    
  if(!Array.isArray(members)) { return false }
  
  let membersFiltered = members.filter(name => typeof name === 'string').sort();
  
 
  let trimmed = [];
  for(let i = 0; i < membersFiltered.length; i++) {
   trimmed.push(membersFiltered[i].trim().toUpperCase())
  }
  let sorted = trimmed.sort()
   
  let res = '';
  sorted.forEach(letter => res += letter[0]);
  let result = res.toUpperCase();
  return result
}

module.exports = {
  createDreamTeam
};
