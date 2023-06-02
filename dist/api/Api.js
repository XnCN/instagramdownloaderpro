"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const http = axios_1.default.create({
    baseURL: constants_1.apiBaseUrl,
    headers: {
        "User-Agent": constants_1.userAgent,
    },
});
exports.default = http;
