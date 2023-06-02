import CommentResponse from "../response/CommentResponse";
import PostPageResponse from "../response/PostPageResponse";
import IService from "./IService";

export default interface IPostService extends IService {
  getPostsByCursor(
    profileEndCursor?: string,
    mobileEndCursor?: string,
    id?: string
  ): Promise<PostPageResponse>;
  getPostComments(postId: string): Promise<CommentResponse[]>;
}
