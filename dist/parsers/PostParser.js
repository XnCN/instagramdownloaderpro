"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../helpers/StringHelpers");
class PostParser {
    parse(dom) {
        var _a, _b, _c, _d, _e, _f, _g;
        const isVideo = dom.querySelector(".video-icon") == undefined ? false : true;
        const id = (_b = (_a = dom.querySelector("a")) === null || _a === void 0 ? void 0 : _a.attributes["href"]) === null || _b === void 0 ? void 0 : _b.split("media/")[1];
        const image = (_c = dom.querySelector(".post-image")) === null || _c === void 0 ? void 0 : _c.attributes["src"];
        const description = (_d = dom.querySelector(".photo-description")) === null || _d === void 0 ? void 0 : _d.innerText;
        const likeCount = (_e = dom.querySelector(".likes_photo")) === null || _e === void 0 ? void 0 : _e.innerText.clear();
        const commentCount = (_f = dom
            .querySelector(".comments_photo")) === null || _f === void 0 ? void 0 : _f.innerText.clear();
        const createdAt = (_g = dom.querySelector(".time")) === null || _g === void 0 ? void 0 : _g.innerText.clear();
        return {
            id,
            isVideo,
            image,
            description,
            likeCount,
            commentCount,
            createdAt,
        };
    }
}
exports.default = new PostParser();
