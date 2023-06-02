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
const node_html_parser_1 = require("node-html-parser");
const Api_1 = __importDefault(require("../api/Api"));
const UserService_1 = __importDefault(require("./UserService"));
const PostService_1 = __importDefault(require("./PostService"));
const StoryService_1 = __importDefault(require("./StoryService"));
const DownloadService_1 = __importDefault(require("./DownloadService"));
class InstagramService {
    getUserData(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield Api_1.default.get(`/profile/${username}`);
            this.dom = (0, node_html_parser_1.parse)(data);
            this.bootServices();
        });
    }
    bootServices() {
        this.userService = new UserService_1.default(this.dom);
        this.postService = new PostService_1.default(this.dom);
        this.storyService = new StoryService_1.default(this.dom);
        this.downloadService = new DownloadService_1.default();
    }
}
exports.default = InstagramService;
