"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const download = axios_1.default.create({
    baseURL: constants_1.downloadApiBaseUrl,
    headers: {
        "User-Agent": constants_1.userAgent,
        "x-requested-with": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
});
exports.default = download;
