import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import DownloadResponse from "../response/DownloadResponse";
declare class DownloadParser implements IParser<DownloadResponse> {
    parse(dom: HTMLElement): DownloadResponse;
}
declare const _default: DownloadParser;
export default _default;
