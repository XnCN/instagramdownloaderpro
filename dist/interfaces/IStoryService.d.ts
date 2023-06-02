import IService from "./IService";
import StoryResponse from "../response/StoryResponse";
export default interface IStoryService extends IService {
    getStories(): Promise<StoryResponse[]>;
}
