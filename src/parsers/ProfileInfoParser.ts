import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import ProfileInfoResponse from "../response/ProfileInfoResponse";
import "../helpers/StringHelpers";
import UserIdParser from "./UserIdParser";
class ProfileInfoParser implements IParser<ProfileInfoResponse> {
  parse(dom: HTMLElement): ProfileInfoResponse {
    const profilePicture = dom.querySelector(".profile-avatar-image")
      ?.attributes["src"];
    const id = UserIdParser.parse(dom);
    const name = dom.querySelector(".profile-name-bottom")?.innerText;
    const userName = dom
      .querySelector(".profile-name-top")
      ?.innerText.usernameClear();
    return {
      id,
      name,
      userName,
      profilePicture,
    };
  }
}

export default new ProfileInfoParser();
