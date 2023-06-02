import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import CommentResponse from "../response/CommentResponse";
import "../helpers/StringHelpers";
declare class CommentParser implements IParser<CommentResponse> {
    parse(dom: HTMLElement): CommentResponse;
}
declare const _default: CommentParser;
export default _default;
