"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const fetchClient = {
    get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(`https://www.picuki.com${path}`);
            const body = yield data.text();
            return { data: body };
        });
    },
};
exports.default = fetchClient;
