const userDB = require('../server/db/queries/user');
const {User} = require('../server/models/user');

async function SignUp(login, password) {
    if (login === '' || password === '') {
        throw new Error('invalid password or login');
    }

    if (await userDB.ifExistUser(login)) {
        throw new Error('enter other login');
    }

    let user = new User(login, false, password);
    return userDB.addUser(user);
}

async function SignIn(login, password) {
    const user = userDB.findUser(login);

    if (!user) {
        throw new Error("user not found");
    } else {

    }
}

module.exports = {
    SignUp
}