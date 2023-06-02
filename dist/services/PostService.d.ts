import { HTMLElement } from "node-html-parser";
import IPostService from "../interfaces/IPostService";
import PostPageResponse from "../response/PostPageResponse";
import IPostParserSetting from "../interfaces/IPostParserSetting";
import CommentResponse from "../response/CommentResponse";
declare class PostService implements IPostService {
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    getPostComments(postId: string): Promise<CommentResponse[]>;
    getPostsByCursor(profileEndCursor?: string, mobileEndCursor?: string, id?: string): Promise<PostPageResponse>;
    getDefaultPosts(): PostPageResponse;
    getCursorPosts(profileEndCursor?: string, mobileEndCursor?: string, id?: string): Promise<PostPageResponse>;
    getPostParser(setting: IPostParserSetting): PostPageResponse;
}
export default PostService;
