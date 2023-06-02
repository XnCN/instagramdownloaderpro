import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import ProfileInfoResponse from "../response/ProfileInfoResponse";
import "../helpers/StringHelpers";
declare class ProfileInfoParser implements IParser<ProfileInfoResponse> {
    parse(dom: HTMLElement): ProfileInfoResponse;
}
declare const _default: ProfileInfoParser;
export default _default;
