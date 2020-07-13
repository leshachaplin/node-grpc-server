import {number} from "joi";

const refresh = {
    UserId: 'string',
    Expiration: new Date,
    Token: 'string',
};

type RefreshModel = typeof refresh;

export default RefreshModel;