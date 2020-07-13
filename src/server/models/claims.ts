const claim = {
    login: 'string',
    description: 'string',
    value: 'string',
};

export type ClaimObj = typeof claim;

export type Claims = {
    [index:number]: ClaimObj,
}

export class Claim {
    readonly login : string;
    readonly description : string;
    readonly value : string;

    constructor(login:string, description:string, value:string) {
        this.login = login;
        this.description = description;
        this.value = value;
    }
}