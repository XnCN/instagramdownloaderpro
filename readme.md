# Instagram Downloader Pro

This project provide an instagram api wrapper.You can use in your web services and mobile applications.Instagram downloader library is using `picuki.com` and `igdownloader.app`.

## Features

- Photo Download
- Gallery Download
- Video Download
- Story Download
- Profile View
- Profile Post Pagination
- Profile Stories
- Post/Video comments
- Profile Info

## Services

- Download Service
- Post Service
- Story Service
- User Service

## Install

You can install on npm

```bash
  npm install @xncn/instagramdownloaderpro
```

## Usage

```
import {InstagramService} from "@xncn/instagramdownloaderpro";

async function Run() {
  const instagram = new InstagramService();
  await instagram.getUserData("USERNAME");
  //now you can use instagram.SERVICENAME.METHODNAME
}

Run();

```

\*dont forget to call getUserData() for all services without download service.

### Download Service

You can get downloadable links with download service

```
   const download = await instagram.downloadService.Download(
    "https://www.instagram.com/**"
  );
  console.log(download);
```

#### Example Response[DownloadResponse[]]

```
 [
   {
    thumb?: string;
    url?: string;
   }
 ]
```

### User Service

You can get user information with user service.

```
const userData = instagram.userService.getProfileInfo();
console.log(userData);
```

#### Example Response[ProfileInfoResponse]

```
  {
    id?: string;
    userName?: string;
    name?: string;
    profilePicture?: string;
    description?: string;
    postCount?: string;
    followerCount?: string;
    followingCount?: string;
  }
```

### Post Service

You can get user posts with pagination

```
  //First Page
   const posts = await instagram.postService.getPostsByCursor();
   console.log(posts);
   //Other Pages
   //const posts = await instagram.postService.getPostsByCursor(profileEndCursor: string, mobileEndCursor: string, id: string);
```

#### Example Response[PostPageResponse]

```
  {
    profileEndCursor: string;
    mobileEndCursor: string;
    id: string;
    data:[
      id?: string;
      isVideo?: boolean;
      image?: string;
      description?: string;
      likeCount?: string;
      commentCount?: string;
      createdAt?: string;
    ]
  }
```

### Story Service

You can get user stories with story service

```
  const stories = await instagram.storyService.getStories();
  console.log(stories);
```

#### Example Response[StoryResponse[]]

```
 [
   {
    poster?: string;
    background?: string;
    video?: string;
   }
 ]
```

### Comment Service

You can get comments with comment service

```
  const comments = await instagram.postService.getPostComments("ID");
  console.log(comments);
```

#### Example Response[CommentResponse[]]

```
 [
   {
    username?: string;
    comment?: string;
   }
 ]
```
