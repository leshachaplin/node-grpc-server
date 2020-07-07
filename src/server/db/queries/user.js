const knex = require('../connection');
const {User} = require('../models/user')
//const {UserClass} = require('../../models/user')

function findUser(UserId) {
    return User.query()
        .select('UserId', 'Password', 'Confirmed')
        .where('UserId', '=', UserId);
}

async function ifExistUser(id) {
    console.log(id);
    let user = await User.query().findOne({UserId: id});
    console.log(user);
    if (!user) {
        return false;
    }
    return true;
}

function addUser(user) {
    return User.query()
        .insert({
            UserId: user.getUserID,
            Password: user.getUserPassword,
            Confirmed: user.getUserConfirmationInfo
        });
}

function deleteUser(id) {
    return User.query()
        .delete()
        .where('UserId', '=', id);
}

module.exports = {
    findUser,
    ifExistUser,
    addUser,
    deleteUser
};
