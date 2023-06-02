import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import CommentResponse from "../response/CommentResponse";
import "../helpers/StringHelpers";
class CommentParser implements IParser<CommentResponse> {
  parse(dom: HTMLElement): CommentResponse {
    const username = dom
      .querySelector(".comment-user-nickname")
      ?.innerText.usernameClear();
    const comment = dom.querySelector(".comment-text")?.innerText.clear();
    return {
      username,
      comment,
    };
  }
}

export default new CommentParser();
