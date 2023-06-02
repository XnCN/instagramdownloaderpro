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
exports.InstagramService = void 0;
const InstagramService_1 = __importDefault(require("./services/InstagramService"));
exports.InstagramService = InstagramService_1.default;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const instagram = new InstagramService_1.default();
        yield instagram.getUserData("marvin");
        const userData = instagram.userService.getProfileInfo();
        const posts = yield instagram.postService.getPostsByCursor();
        const download = yield instagram.downloadService.Download("https://www.instagram.com/p/Cs3FB7Mtq2K/");
        //const stories = await instagram.storyService.getStories();
        //const comments = await instagram.postService.getPostComments("3113615803258011186" );
        // const posts2 = await instagram.postService.getPostsByCursor(
        //   posts.profileEndCursor,
        //   posts.mobileEndCursor,
        //   posts.id
        // );
        console.log(posts);
        console.log(download);
        return;
    });
}
run();
