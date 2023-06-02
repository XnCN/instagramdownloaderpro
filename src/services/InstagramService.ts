import { HTMLElement, parse } from "node-html-parser";
import http from "../api/Api";
import IUserService from "../interfaces/IUserService";
import UserService from "./UserService";
import IPostService from "../interfaces/IPostService";
import PostService from "./PostService";
import IStoryService from "../interfaces/IStoryService";
import StoryService from "./StoryService";
import IDownloadService from "../interfaces/IDownloadService";
import DownloadService from "./DownloadService";

class InstagramService {
  dom: HTMLElement;
  userService: IUserService;
  postService: IPostService;
  storyService: IStoryService;
  downloadService: IDownloadService;
  async getUserData(username: string) {
    const { data } = await http.get(`/profile/${username}`);
    this.dom = parse(data);
    this.bootServices();
  }
  bootServices() {
    this.userService = new UserService(this.dom);
    this.postService = new PostService(this.dom);
    this.storyService = new StoryService(this.dom);
    this.downloadService = new DownloadService();
  }
}

export default InstagramService;
