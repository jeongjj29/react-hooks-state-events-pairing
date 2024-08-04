import React, { useState } from "react";

function DislikeButton({ downvotes, onDislikeClick }) {
  function handleClick() {
    const newDislikes = downvotes + 1;
    onDislikeClick(newDislikes);
  }

  return (
    <button id="dislikeButton" onClick={handleClick}>
      {downvotes} 👎
    </button>
  );
}

export default DislikeButton;
