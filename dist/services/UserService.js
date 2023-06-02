"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileInfoParser_1 = __importDefault(require("../parsers/ProfileInfoParser"));
class UserService {
    constructor(dom) {
        this.dom = dom;
    }
    getProfileInfo() {
        return ProfileInfoParser_1.default.parse(this.dom);
    }
}
exports.default = UserService;
