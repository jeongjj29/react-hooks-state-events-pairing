import React from "react";
import CommentLi from "./CommentLi";

function Comments({ video, onCommentLike }) {
  return (
    <div>
      <h2>
        {video.comments.length}{" "}
        {video.comments.length === 1 ? "Comment" : "Comments"}
      </h2>
      <ul>
        {video.comments.map((comment) => {
          return (
            <CommentLi
              key={comment.id}
              comment={comment}
              onCommentLike={onCommentLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
