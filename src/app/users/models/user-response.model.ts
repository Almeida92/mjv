import { UserModel } from "./user.model";

export interface UserResponseModel {
    data: Array<UserModel>;
    limit: number;
    page: number;
    total: number;
}