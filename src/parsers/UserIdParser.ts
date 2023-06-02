import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";

class UserIdParser implements IParser<string> {
  parse(dom: HTMLElement): string {
    const next =
      dom.querySelector(".load-more-wrapper")?.attributes["data-next"];
    const pattern =
      /end_cursor=([^&]+).*?end_cursor_mobile=([^&]+).*?id=([^&]+)/;
    const matches = next?.match(pattern);
    return matches != undefined ? matches[3] : "";
  }
}
export default new UserIdParser();
