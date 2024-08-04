import React from "react";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import HideCommentsButton from "./HideCommentsButton";

function Description({ video, onHideClick, onLikeClick, onDislikeClick }) {
  return (
    <div id="description">
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <LikeButton upvotes={video.upvotes} onLikeClick={onLikeClick} />
      <DislikeButton
        downvotes={video.downvotes}
        onDislikeClick={onDislikeClick}
      />
      <br />
      <HideCommentsButton onHideClick={onHideClick} />
    </div>
  );
}

export default Description;
