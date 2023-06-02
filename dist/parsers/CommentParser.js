"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../helpers/StringHelpers");
class CommentParser {
    parse(dom) {
        var _a, _b;
        const username = (_a = dom
            .querySelector(".comment-user-nickname")) === null || _a === void 0 ? void 0 : _a.innerText.usernameClear();
        const comment = (_b = dom.querySelector(".comment-text")) === null || _b === void 0 ? void 0 : _b.innerText.clear();
        return {
            username,
            comment,
        };
    }
}
exports.default = new CommentParser();
