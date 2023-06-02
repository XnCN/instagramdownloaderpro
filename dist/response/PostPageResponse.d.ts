import PostResponse from "./PostResponse";
export default interface PostPageResponse {
    profileEndCursor: string;
    mobileEndCursor: string;
    id: string;
    data: PostResponse[];
}
