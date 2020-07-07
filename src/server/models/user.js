const bcrypt = require('bcrypt');
const

class User {
    _UserId = '';
    _Confirmed = false;
    _Password = '';

    constructor(userId, confirmed, password) {
        this._UserId = userId;
        this._Confirmed = confirmed;
        this._Password = password;
    }

    get getUserID() {
        return this._UserId;
    }

    get getUserConfirmationInfo() {
        return this._Confirmed;
    }

    get getUserPassword() {
        return this._Password;
    }

    set userConfirmationInfo(confirm) {
        this._Confirmed = confirm;
    }



    hashPassword(password) {
        let hashedPassword = '';
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) {
                    throw err;
                }
                hashedPassword = hash
            });
        });
        return hashedPassword;
    }

    verifyPassword(password, hash) {
        let verified = false;
        bcrypt.compare(password, hash, function (err, result) {
            if (result) {
                verified = true;
            }
        });
        return verified;
    }
}

module.exports = {User};