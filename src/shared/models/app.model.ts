import User from "./user.model";
import IApp from "../interfaces/app.interface";

export default class App implements IApp {
    user: User;

    constructor(user?: User) {
        this.user = user ? user : new User();
    }
}