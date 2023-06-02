import { HTMLElement } from "node-html-parser";
import IUserService from "../interfaces/IUserService";
import IPostService from "../interfaces/IPostService";
import IStoryService from "../interfaces/IStoryService";
import IDownloadService from "../interfaces/IDownloadService";
declare class InstagramService {
    dom: HTMLElement;
    userService: IUserService;
    postService: IPostService;
    storyService: IStoryService;
    downloadService: IDownloadService;
    constructor();
    getUserData(username: string): Promise<void>;
    bootServices(): void;
}
export default InstagramService;
