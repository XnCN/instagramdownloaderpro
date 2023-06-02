import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import StoryResponse from "../response/StoryResponse";
declare class StoryParser implements IParser<StoryResponse> {
    parse(dom: HTMLElement): StoryResponse;
}
declare const _default: StoryParser;
export default _default;
