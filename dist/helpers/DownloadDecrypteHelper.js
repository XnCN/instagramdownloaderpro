"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DecrypteDownload;
//@ts-ignore
const DecrypteHelper_1 = __importDefault(require("./DecrypteHelper"));
function DecrypteDownload(input) {
    const match = input.match(/\("([^"]+)",/);
    if (!match)
        throw Error("Code not found");
    const rawCode = match[1];
    const decyriptedBody = (0, DecrypteHelper_1.default)(rawCode, 1, "abcdefghi", 1, 2, 1);
    const innerHTML = decyriptedBody.match(/document\.getElementById\("download-result"\)\.innerHTML\s*=\s*"(.*?)";/);
    if (!innerHTML)
        throw Error("Inner html not found");
    if (innerHTML[1] == null)
        throw Error("Error found in inner html");
    return innerHTML[1].replace(/\\/g, "");
}
