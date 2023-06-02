import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import PostResponse from "../response/PostResponse";
import "../helpers/StringHelpers";

class PostParser implements IParser<PostResponse> {
  parse(dom: HTMLElement): PostResponse {
    const isVideo =
      dom.querySelector(".video-icon") == undefined ? false : true;
    const id = dom.querySelector("a")?.attributes["href"]?.split("media/")[1];
    const image = dom.querySelector(".post-image")?.attributes["src"];
    const description = dom.querySelector(".photo-description")?.innerText;
    const likeCount = dom.querySelector(".likes_photo")?.innerText.clear();
    const commentCount = dom
      .querySelector(".comments_photo")
      ?.innerText.clear();
    const createdAt = dom.querySelector(".time")?.innerText.clear();
    return {
      id,
      isVideo,
      image,
      description,
      likeCount,
      commentCount,
      createdAt,
    };
  }
}
export default new PostParser();
