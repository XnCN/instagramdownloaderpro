"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DownloadParser {
    parse(dom) {
        var _a, _b;
        const thumb = (_a = dom.querySelector(".download-items__thumb img")) === null || _a === void 0 ? void 0 : _a.attributes["src"];
        const url = (_b = dom.querySelector(".download-items__btn a")) === null || _b === void 0 ? void 0 : _b.attributes["href"];
        return {
            thumb,
            url,
        };
    }
}
exports.default = new DownloadParser();
