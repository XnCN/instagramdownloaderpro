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
const node_html_parser_1 = __importDefault(require("node-html-parser"));
const PostParser_1 = __importDefault(require("../parsers/PostParser"));
const Api_1 = __importDefault(require("../api/Api"));
const CommentParser_1 = __importDefault(require("../parsers/CommentParser"));
class PostService {
    constructor(dom) {
        this.dom = dom;
    }
    getPostComments(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield Api_1.default.get(`/media/${postId}`);
            const dom = (0, node_html_parser_1.default)(data);
            var commentFeed = dom.querySelectorAll("#commantsPlace div");
            const comments = [];
            commentFeed.forEach((c) => {
                const comment = CommentParser_1.default.parse(c);
                if (comment.username != undefined && comment.comment != undefined)
                    comments.push(comment);
            });
            return comments;
        });
    }
    getPostsByCursor(profileEndCursor, mobileEndCursor, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return profileEndCursor == undefined
                ? this.getDefaultPosts()
                : yield this.getCursorPosts(profileEndCursor, mobileEndCursor, id);
        });
    }
    getDefaultPosts() {
        const defaultSetting = {
            dom: this.dom,
            feedSelector: ".profile-box-photos li",
            loadMoreSelector: ".load-more-wrapper",
            loadmoreAttributeSelector: "data-next",
        };
        return this.getPostParser(defaultSetting);
    }
    getCursorPosts(profileEndCursor, mobileEndCursor, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield Api_1.default.get(`/app/controllers/ajax.php?type=profile&end_cursor=${profileEndCursor}&end_cursor_mobile=${mobileEndCursor}&id=${id}&ads=1`);
            const dom = (0, node_html_parser_1.default)(data);
            const cursorSetting = {
                dom,
                feedSelector: "li",
                loadMoreSelector: ".pagination-next-page-input",
                loadmoreAttributeSelector: "value",
            };
            return this.getPostParser(cursorSetting);
        });
    }
    getPostParser(setting) {
        var _a;
        const posts = [];
        var feed = setting.dom.querySelectorAll(setting.feedSelector);
        const next = (_a = setting.dom.querySelector(setting.loadMoreSelector)) === null || _a === void 0 ? void 0 : _a.attributes[setting.loadmoreAttributeSelector];
        const pattern = /end_cursor=([^&]+).*?end_cursor_mobile=([^&]+).*?id=([^&]+)/;
        const matches = next === null || next === void 0 ? void 0 : next.match(pattern);
        feed.forEach((f) => {
            const response = PostParser_1.default.parse(f);
            if (response.image != undefined)
                posts.push(response);
        });
        return {
            profileEndCursor: matches != undefined ? matches[1] : "",
            mobileEndCursor: matches != undefined ? matches[2] : "",
            id: matches != undefined ? matches[3] : "",
            data: posts,
        };
    }
}
exports.default = PostService;
