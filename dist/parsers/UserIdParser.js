"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserIdParser {
    parse(dom) {
        var _a;
        const next = (_a = dom.querySelector(".load-more-wrapper")) === null || _a === void 0 ? void 0 : _a.attributes["data-next"];
        const pattern = /end_cursor=([^&]+).*?end_cursor_mobile=([^&]+).*?id=([^&]+)/;
        const matches = next === null || next === void 0 ? void 0 : next.match(pattern);
        return matches != undefined ? matches[3] : "";
    }
}
exports.default = new UserIdParser();
