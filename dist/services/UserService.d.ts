import { HTMLElement } from "node-html-parser";
import ProfileInfoResponse from "../response/ProfileInfoResponse";
import IUserService from "../interfaces/IUserService";
declare class UserService implements IUserService {
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    getProfileInfo(): ProfileInfoResponse;
}
export default UserService;
