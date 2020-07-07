//const knex = require('../connection');
const {User} = require('../models/user')
//const {UserClass} = require('../../models/user')

function findUser(UserId) {
    return User.query()
        .select('UserId', 'Password', 'Confirmed')
        .where('UserId', '=', UserId);
}

function ifExistUser(id) {
    let user = User.query().findOne({UserId: id});
    if (user == null) {
        return false;
    }
    return true;
}

function addUser(user) {
    return User.query()
        .insert({
            UserId: user.getUserId,
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
