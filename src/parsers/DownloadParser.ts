import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import DownloadResponse from "../response/DownloadResponse";

class DownloadParser implements IParser<DownloadResponse> {
  parse(dom: HTMLElement): DownloadResponse {
    const thumb = dom.querySelector(".download-items__thumb img")?.attributes[
      "src"
    ];
    const url = dom.querySelector(".download-items__btn a")?.attributes["href"];
    return {
      thumb,
      url,
    };
  }
}

export default new DownloadParser();
