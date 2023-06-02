import { HTMLElement } from "node-html-parser";
import IStoryService from "../interfaces/IStoryService";
import StoryResponse from "../response/StoryResponse";
declare class StoryService implements IStoryService {
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    getStories(): Promise<StoryResponse[]>;
}
export default StoryService;
