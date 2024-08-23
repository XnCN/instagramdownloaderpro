import { HTMLElement } from "node-html-parser";
import IStoryService from "../interfaces/IStoryService";
import parse from "node-html-parser";
import http from "../api/Api";
import StoryResponse from "../response/StoryResponse";
import StoryParser from "../parsers/StoryParser";
import ProfileInfoParser from "../parsers/ProfileInfoParser";

class StoryService implements IStoryService {
  dom: HTMLElement;
  constructor(dom: HTMLElement) {
    this.dom = dom;
  }
  async getStories(): Promise<StoryResponse[]> {
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
  }
}

export default StoryService;
