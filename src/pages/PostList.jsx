import React from "react";

export default function PostList({ data }) {
  return (
    <div>
      {data?.map((post) => (
        <div>
          {post.title}
          {post.contents}
        </div>
      ))}
    </div>
  );
}
