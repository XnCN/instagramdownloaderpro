import { HTMLElement } from "node-html-parser";
export default interface IPostParserSetting {
  dom: HTMLElement;
  feedSelector: string;
  loadMoreSelector: string;
  loadmoreAttributeSelector: string;
}
