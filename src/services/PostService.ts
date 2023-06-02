import parse, { HTMLElement } from "node-html-parser";
import IPostService from "../interfaces/IPostService";
import PostPageResponse from "../response/PostPageResponse";
import PostResponse from "../response/PostResponse";
import PostParser from "../parsers/PostParser";
import http from "../api/Api";
import IPostParserSetting from "../interfaces/IPostParserSetting";
import CommentResponse from "../response/CommentResponse";
import CommentParser from "../parsers/CommentParser";

class PostService implements IPostService {
  dom: HTMLElement;
  constructor(dom: HTMLElement) {
    this.dom = dom;
  }
  async getPostComments(postId: string): Promise<CommentResponse[]> {
    const { data } = await http.get(`/media/${postId}`);
    const dom = parse(data);
    var commentFeed = dom.querySelectorAll("#commantsPlace div");
    const comments: CommentResponse[] = [];
    commentFeed.forEach((c) => {
      const comment = CommentParser.parse(c);
      if (comment.username != undefined && comment.comment != undefined)
        comments.push(comment);
    });
    return comments;
  }

  async getPostsByCursor(
    profileEndCursor?: string,
    mobileEndCursor?: string,
    id?: string
  ): Promise<PostPageResponse> {
    return profileEndCursor == undefined
      ? this.getDefaultPosts()
      : await this.getCursorPosts(profileEndCursor, mobileEndCursor, id);
  }

  getDefaultPosts(): PostPageResponse {
    const defaultSetting: IPostParserSetting = {
      dom: this.dom,
      feedSelector: ".profile-box-photos li",
      loadMoreSelector: ".load-more-wrapper",
      loadmoreAttributeSelector: "data-next",
    };
    return this.getPostParser(defaultSetting);
  }

  async getCursorPosts(
    profileEndCursor?: string,
    mobileEndCursor?: string,
    id?: string
  ): Promise<PostPageResponse> {
    const { data } = await http.get(
      `/app/controllers/ajax.php?type=profile&end_cursor=${profileEndCursor}&end_cursor_mobile=${mobileEndCursor}&id=${id}&ads=1`
    );
    const dom = parse(data);
    const cursorSetting: IPostParserSetting = {
      dom,
      feedSelector: "li",
      loadMoreSelector: ".pagination-next-page-input",
      loadmoreAttributeSelector: "value",
    };
    return this.getPostParser(cursorSetting);
  }

  getPostParser(setting: IPostParserSetting): PostPageResponse {
    const posts: PostResponse[] = [];
    var feed = setting.dom.querySelectorAll(setting.feedSelector);
    const next = setting.dom.querySelector(setting.loadMoreSelector)
      ?.attributes[setting.loadmoreAttributeSelector];
    const pattern =
      /end_cursor=([^&]+).*?end_cursor_mobile=([^&]+).*?id=([^&]+)/;
    const matches = next?.match(pattern);
    feed.forEach((f) => {
      const response = PostParser.parse(f);
      if (response.image != undefined) posts.push(response);
    });
    return {
      profileEndCursor: matches != undefined ? matches[1] : "",
      mobileEndCursor: matches != undefined ? matches[2] : "",
      id: matches != undefined ? matches[3] : "",
      data: posts,
    };
  }
}
export default PostService;
