/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Himada",
    content: "Practice TypeScript daily #typescript #coding",
    hashtags: ["typescript", "coding"],
    likes: 145
  },
  {
    author: "Queen",
    content: "Building API with NestJS #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 310
  },
  {
    author: "Ferdi",
    content: "UI design with NextJS #nextjs #design",
    hashtags: ["nextjs", "design"],
    likes: 215
  },
  {
    author: "Aryan",
    content: "Server setup using NestJS #nestjs #server",
    hashtags: ["nestjs", "server"],
    likes: 275
  }
]

function showPostReport(postList: any[]): void {
  let typescriptPosts: any[] = []
  let nestjsPosts: any[] = []
  let totalLikes: number = 0

  for (let i: number = 0; i < postList.length; i = i + 1) {
    let currentPost = postList[i]
    totalLikes = totalLikes + currentPost.likes

    let hasTypescript: boolean = false
    let hasNestjs: boolean = false

    for (let j: number = 0; j < currentPost.hashtags.length; j = j + 1) {
      let currentTag: string = currentPost.hashtags[j]

      if (currentTag === "typescript") {
        hasTypescript = true
      }

      if (currentTag === "nestjs") {
        hasNestjs = true
      }
    }

    if (hasTypescript === true) {
      typescriptPosts.push(currentPost)
    }

    if (hasNestjs === true) {
      nestjsPosts.push(currentPost)
    }
  }

  let mostLikedPost = postList[0]
  for (let i: number = 1; i < postList.length; i = i + 1) {
    if (postList[i].likes > mostLikedPost.likes) {
      mostLikedPost = postList[i]
    }
  }

  console.log("1. TypeScript Posts:", typescriptPosts)
  console.log("2. NestJS Posts:", nestjsPosts)
  console.log("3. Most Liked Post:", mostLikedPost)
  console.log("4. Total Likes:", totalLikes)
}
showPostReport(posts)