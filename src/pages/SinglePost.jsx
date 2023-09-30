import React, { useEffect, useState } from "react";
import myABI from "../../abi.json";
import { useContractRead } from "wagmi";
import { useParams, useSearchParams } from "react-router-dom";
import Post from "../components/Post";

const SinglePost = () => {
  const { postid } = useParams();
  const [post, setPost] = useState([]);
  const { data, isError, isLoading } = useContractRead({
    address: myABI.address,
    abi: myABI.abi,
    functionName: "getPost",
    args: [postid],
  });
  useEffect(() => {
    setPost(data);
  });
  return (
    <div className="mt-10">
      <Post post={post} />
    </div>
  );
};

export default SinglePost;
