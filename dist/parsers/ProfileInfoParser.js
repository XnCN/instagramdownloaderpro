"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../helpers/StringHelpers");
const UserIdParser_1 = __importDefault(require("./UserIdParser"));
class ProfileInfoParser {
    parse(dom) {
        var _a, _b, _c;
        const profilePicture = (_a = dom.querySelector(".profile-avatar-image")) === null || _a === void 0 ? void 0 : _a.attributes["src"];
        const id = UserIdParser_1.default.parse(dom);
        const name = (_b = dom.querySelector(".profile-name-bottom")) === null || _b === void 0 ? void 0 : _b.innerText;
        const userName = (_c = dom
            .querySelector(".profile-name-top")) === null || _c === void 0 ? void 0 : _c.innerText.usernameClear();
        return {
            id,
            name,
            userName,
            profilePicture,
        };
    }
}
exports.default = new ProfileInfoParser();
