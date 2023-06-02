"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StoryParser {
    parse(dom) {
        var _a, _b, _c;
        const poster = (_a = dom.querySelector(".launchLightbox")) === null || _a === void 0 ? void 0 : _a.attributes["data-video-poster"];
        const video = (_b = dom.querySelector(".launchLightbox")) === null || _b === void 0 ? void 0 : _b.attributes["data-origin"];
        const backgroundStyle = (_c = dom.querySelector(".stories_background")) === null || _c === void 0 ? void 0 : _c.attributes["style"];
        const matches = /url\((.*?)\)/.exec(backgroundStyle !== null && backgroundStyle !== void 0 ? backgroundStyle : "");
        return {
            poster,
            video,
            background: matches != undefined ? matches[1] : "",
        };
    }
}
exports.default = new StoryParser();
