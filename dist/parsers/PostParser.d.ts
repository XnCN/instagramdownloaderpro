import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import PostResponse from "../response/PostResponse";
import "../helpers/StringHelpers";
declare class PostParser implements IParser<PostResponse> {
    parse(dom: HTMLElement): PostResponse;
}
declare const _default: PostParser;
export default _default;
