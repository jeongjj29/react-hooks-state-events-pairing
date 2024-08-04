import React from "react";
import LikeButton from "./LikeButton";

function CommentLi({ comment, onCommentLike, key }) {
  return (
    <li className="comment">
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </li>
  );
}

export default CommentLi;
