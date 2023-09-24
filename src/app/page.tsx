"use client";

import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Inter } from "next/font/google";
import MacBackground from "@/components/background";
import { useEffect, useState } from "react";
import { OsSelectComponent } from "@/components/boot/os-select";

const inter = Inter({ subsets: ["latin"] });

// function PostCard(post: Post) {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link
//           href={post.url}
//           className="bg-red-500 text-blue-700 hover:text-blue-900 dark:text-blue-400"
//         >
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.date), "LLLL d, yyyy")}
//       </time>
//       <div
//         className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
//         dangerouslySetInnerHTML={{ __html: post.body.html }}
//       />
//     </div>
//   );
// }

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

const generateRandomIntervals = (length: number) => {
  let total = 5000; // 10 seconds
  let intervals = [];

  for (let i = 0; i < length - 1; i++) {
    // generate a random number between 200ms and the remaining total divided by the remaining steps
    const interval = Math.floor(
      Math.random() * (total / (length - i) - 200) + 200
    );
    intervals.push(interval);
    total -= interval;
  }

  intervals.push(total); // push the remaining time as the last interval

  return intervals;
};

export default function Index() {
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);

  const [messageIndex, setMessageIndex] = useState(0);
  const bootMessages = [
    "Initializing BIOS...",
    "Verifying hardware integrity...",
    "Searching for boot record...",
    "Boot record found on device SSD0",
    "Launching boot manager...",
    "Preparing core components...",
    "Loading kernel modules...",
    "Establishing system-to-user space bridge...",
    "Initializing device drivers...",
    "Setting up virtual memory...",
    "Scanning for attached devices...",
    "Loading network modules...",
    "Establishing network connections...",
    "Starting system daemons...",
    "Starting system services...",
    "Loading user interfaces...",
    "Welcome, User!",
  ];

  const bootIntervals = generateRandomIntervals(bootMessages.length);

  useEffect(() => {
    const handleDisplay = (index: number): void => {
      if (index >= bootMessages.length) {
        console.log("boot complete");
        setDialogVisible(true);
        return;
      }

      setMessageIndex(index);

      setTimeout(() => {
        handleDisplay(index + 1);
      }, bootIntervals[index]);
    };

    handleDisplay(0);
  }, []);

  return (
    <div className="boot-container">
      {bootMessages.slice(0, messageIndex).map((message, idx) => (
        <div className={`${inter.className} select-none`} key={idx}>
          {message}
        </div>
      ))}
      {isDialogVisible && (
        <OsSelectComponent
          open={isDialogVisible}
          onClose={() => setDialogVisible(false)}
        />
      )}
    </div>
  );
}
