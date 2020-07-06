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
}

module.exports = {User};