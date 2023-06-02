import { HTMLElement } from "node-html-parser";
export default interface IParser<TResponse> {
  parse(dom: HTMLElement): TResponse;
}
