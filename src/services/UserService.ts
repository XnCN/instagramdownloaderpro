import { HTMLElement } from "node-html-parser";
import ProfileInfoResponse from "../response/ProfileInfoResponse";
import ProfileInfoParser from "../parsers/ProfileInfoParser";
import IUserService from "../interfaces/IUserService";

class UserService implements IUserService {
  dom: HTMLElement;
  constructor(dom: HTMLElement) {
    this.dom = dom;
  }
  getProfileInfo(): ProfileInfoResponse {
    return ProfileInfoParser.parse(this.dom);
  }
}
export default UserService;
