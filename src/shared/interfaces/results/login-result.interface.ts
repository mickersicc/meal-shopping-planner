import IUser from "../user.interface";

export default interface ILoginResult {
    id: string;
    isSuccessful: boolean;
    message: string;
    code: number;
    token: string;
    user: IUser;
};