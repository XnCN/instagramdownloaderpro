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
    const description = dom
      .querySelector(".profile-description")
      ?.innerText.clear();
    const postCount = dom.querySelector(".total_posts")?.innerText.infoClear();
    const followerCount = dom
      .querySelector(".followed_by")
      ?.innerText.infoClear();
    const followingCount = dom.querySelector(".follows")?.innerText.infoClear();
    return {
      id,
      name,
      userName,
      profilePicture,
      description,
      postCount,
      followerCount,
      followingCount,
    };
  }
}

export default new ProfileInfoParser();
