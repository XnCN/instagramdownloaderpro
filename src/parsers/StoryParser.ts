import { HTMLElement } from "node-html-parser";
import IParser from "../interfaces/IParser";
import StoryResponse from "../response/StoryResponse";

class StoryParser implements IParser<StoryResponse> {
  parse(dom: HTMLElement): StoryResponse {
    const poster =
      dom.querySelector(".launchLightbox")?.attributes["data-video-poster"];
    const video =
      dom.querySelector(".launchLightbox")?.attributes["data-origin"];
    const backgroundStyle = dom.querySelector(".stories_background")
      ?.attributes["style"];
    const matches = /url\((.*?)\)/.exec(backgroundStyle ?? "");

    return {
      poster,
      video,
      background: matches != undefined ? matches[1] : "",
    };
  }
}

export default new StoryParser();
