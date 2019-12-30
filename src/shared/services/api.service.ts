import uuid from "uuid";

import LoginResult from "../models/results/login-result.model";
import User from "../models/user.model";

export const login = (userName: string, password: string): Promise<LoginResult> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new LoginResult({
                id: uuid(),
                isSuccessful: true,
                message: 'Success',
                code: 200,
                token: uuid(),
                user: new User({
                    id: uuid(),
                    firstName: 'Micky',
                    lastName: 'Hallabrin',
                    isLoggedIn: true
                })
            }));
        }, 1000)
    });
};
