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
const Api_1 = __importDefault(require("../api/Api"));
const StoryParser_1 = __importDefault(require("../parsers/StoryParser"));
const ProfileInfoParser_1 = __importDefault(require("../parsers/ProfileInfoParser"));
class StoryService {
    constructor(dom) {
        this.dom = dom;
    }
    getStories() {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = ProfileInfoParser_1.default.parse(this.dom);
            const { data } = yield Api_1.default.post(`/app/controllers/ajax.php`, {
                username: userInfo.userName,
                query: userInfo.id,
                type: "check_cached_stories",
            }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                },
            });
            const dom = (0, node_html_parser_1.default)(data.stories_container);
            const stories = [];
            var storyFeed = dom.querySelectorAll(".owl-stories .item");
            storyFeed.forEach((s) => stories.push(StoryParser_1.default.parse(s)));
            return stories;
        });
    }
}
exports.default = StoryService;
