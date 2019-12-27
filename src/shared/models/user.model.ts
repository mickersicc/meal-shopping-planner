import IUser from '../interfaces/user.interface';
import uuid from 'uuid';

export default class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;
    isLoggedIn: boolean;

    constructor(user?: User) {
        this.id = user && user.id ? user.id : uuid();
        this.firstName = user && user.firstName ? user.firstName : '';
        this.lastName = user && user.lastName ? user.lastName : '';
        this.isLoggedIn = user && user.isLoggedIn ? user.isLoggedIn : false;
    }
}