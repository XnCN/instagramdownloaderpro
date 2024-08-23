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
Object.defineProperty(exports, "__esModule", { value: true });
class StoryService {
    constructor(dom) {
        this.dom = dom;
    }
    getStories() {
        return __awaiter(this, void 0, void 0, function* () {
            // const userInfo = ProfileInfoParser.parse(this.dom);
            // const { data } = await http.post(
            //   `/app/controllers/ajax.php`,
            //   {
            //     username: userInfo.userName,
            //     query: userInfo.id,
            //     type: "check_cached_stories",
            //   },
            //   {
            //     headers: {
            //       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            //     },
            //   }
            // );
            // const stories: StoryResponse[] = [];
            // if (data.stories_container == undefined) return stories;
            // const dom = parse(data.stories_container);
            // var storyFeed = dom.querySelectorAll(".owl-stories .item");
            // storyFeed.forEach((s) => stories.push(StoryParser.parse(s)));
            // return stories;
            return [];
        });
    }
}
exports.default = StoryService;
