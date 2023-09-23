"use client";

import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Inter } from "next/font/google";
import MacBackground from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="bg-red-500 text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

// export default function Home() {
//   // const posts = allPosts.sort((a, b) =>
//   //   compareDesc(new Date(a.date), new Date(b.date))
//   // );

//   return (
//     <div>
//       <Header />

//       {/* {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))} */}
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="h-full">
      <MacBackground />

      <div className="flex flex-col justify-center items-center align-center text-black h-full w-full">
        <div className={`${inter.className} text-3xl`}>Coming Soon</div>
        <div className={`${inter.className} text-sm`}>IDoCode.dev</div>
      </div>
    </div>
  );
}
