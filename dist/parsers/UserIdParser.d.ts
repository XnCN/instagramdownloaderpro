import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
declare class UserIdParser implements IParser<string> {
    parse(dom: HTMLElement): string;
}
declare const _default: UserIdParser;
export default _default;
