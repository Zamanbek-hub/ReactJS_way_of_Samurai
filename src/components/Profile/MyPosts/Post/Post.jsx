import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://u.kanobu.ru/editor/images/17/2446dc5f-1029-45ae-ae8c-08e85eb94adc.jpg"
        alt=""
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
