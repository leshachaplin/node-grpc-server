//const knex = require('../connection');
const {Claim} = require('../models/claim')

function getUserClaims(id) {
  return Claim.query()
      .select('Password', 'Confirmed')
      .where('UserId', '=', id);
}

let claims = getUserClaims('a');

console.log(claims.toString())


// module.exports = {
//   getSingleUser,
//   addUser,
// };
