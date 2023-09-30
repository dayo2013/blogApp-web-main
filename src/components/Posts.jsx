import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import myABI from "../../abi.json";
import blogImage from "../assets/blog.jpg";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { data, isError, isLoading } = useContractRead({
    address: myABI.address,
    abi: myABI.abi,
    functionName: "getPosts",
    args: [0, 2],
  });

  useEffect(() => {
    setPosts(data);
    console.log(data);
  }, []);
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 lg:mb-14">
        {posts.map((post, index) => (
          <a
            class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:border-gray-800"
            href={`post/${post?.id}`}
            key={index}
          >
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="w-full object-cover rounded-t-xl"
                src={blogImage}
                alt="Image Description"
              />
            </div>
            <div class="p-4 md:p-5">
              <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                {post?.poster}
                <span className="bg-[#F7F7F7] py-1 px-2 rounded-xl">
                  {post && Number(post?.timePosted) / 3600}
                  hours ago
                </span>
                <span>{Number(post?.tips)}</span>
              </p>
              <h3 class="mt-2 text-lg font-medium text-tertiary group-hover:text-primary">
                {post?.content}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Posts;
