"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../helpers/StringHelpers");
const UserIdParser_1 = __importDefault(require("./UserIdParser"));
class ProfileInfoParser {
    parse(dom) {
        var _a, _b, _c, _d, _e, _f, _g;
        const profilePicture = (_a = dom.querySelector(".profile-avatar-image")) === null || _a === void 0 ? void 0 : _a.attributes["src"];
        const id = UserIdParser_1.default.parse(dom);
        const name = (_b = dom.querySelector(".profile-name-bottom")) === null || _b === void 0 ? void 0 : _b.innerText;
        const userName = (_c = dom
            .querySelector(".profile-name-top")) === null || _c === void 0 ? void 0 : _c.innerText.usernameClear();
        const description = (_d = dom
            .querySelector(".profile-description")) === null || _d === void 0 ? void 0 : _d.innerText.clear();
        const postCount = (_e = dom.querySelector(".total_posts")) === null || _e === void 0 ? void 0 : _e.innerText.infoClear();
        const followerCount = (_f = dom
            .querySelector(".followed_by")) === null || _f === void 0 ? void 0 : _f.innerText.infoClear();
        const followingCount = (_g = dom.querySelector(".follows")) === null || _g === void 0 ? void 0 : _g.innerText.infoClear();
        return {
            id,
            name,
            userName,
            profilePicture,
            description,
            postCount,
            followerCount,
            followingCount,
        };
    }
}
exports.default = new ProfileInfoParser();
