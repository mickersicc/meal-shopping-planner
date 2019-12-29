import User from "./user.model";

export default class App {
    user: User;

    constructor(user?: User) {
        this.user = user ? user : new User();
    }
}