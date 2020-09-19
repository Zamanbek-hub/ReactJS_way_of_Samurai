import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
        <div>New posts</div>
        <div className={s.posts}>
          {/* props */}
          <Post message="Hi how are you?" like="17" />
          <Post message="It's my first post" like="15" />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
