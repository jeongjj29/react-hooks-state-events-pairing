import React, { useState } from "react";

function LikeButton({ upvotes, onLikeClick }) {
  function handleClick() {
    const newLikes = upvotes + 1;
    onLikeClick(newLikes);
  }

  return (
    <button id="likeButton" onClick={handleClick}>
      {upvotes} 👍
    </button>
  );
}

export default LikeButton;
