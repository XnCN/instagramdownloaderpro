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
const DownloadApi_1 = __importDefault(require("../api/DownloadApi"));
const node_html_parser_1 = __importDefault(require("node-html-parser"));
const DownloadParser_1 = __importDefault(require("../parsers/DownloadParser"));
class DownloadService {
    Download(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield DownloadApi_1.default.post("/ajaxSearch", {
                recaptchaToken: null,
                q: url,
                t: "media",
            });
            if (data.status != "ok")
                throw Error("Api error");
            const dom = (0, node_html_parser_1.default)(data.data);
            const downloadItems = [];
            const items = dom.querySelectorAll(".download-box li");
            items.forEach((i) => {
                const item = DownloadParser_1.default.parse(i);
                if (item.url != undefined)
                    downloadItems.push(item);
            });
            return downloadItems;
        });
    }
}
exports.default = DownloadService;
