import InstagramService from "./services/InstagramService";

async function run() {
  const instagram = new InstagramService();
  await instagram.getUserData("marvin");
  const userData = instagram.userService.getProfileInfo();
  const posts = await instagram.postService.getPostsByCursor();
  const download = await instagram.downloadService.Download(
    "https://www.instagram.com/p/Cs3FB7Mtq2K/"
  );
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
}

run();

export { InstagramService };
