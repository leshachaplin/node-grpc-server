const userDB = require('../server/db/queries/user');
const {User} = require('../server/models/user');

function SignUp(login, password) {
    if (login === '' || password === '') {
        return new Error('invalid password or login');
    }

    if (userDB.ifExistUser(login)) {
        return new Error('enter other login');
    }

    let user = new User(login, false, password);

    userDB.addUser(user);
}

module.exports = {
    SignUp
}