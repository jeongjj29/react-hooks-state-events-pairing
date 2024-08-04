import video from "../data/video.js";
import Description from "./Description";
import Comments from "./Comments";
import React, { useState } from "react";

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [videoData, setVideoData] = useState(video);

  function onHideClick() {
    setIsHidden(!isHidden);
  }

  function onLikeClick(likes) {
    setVideoData({ ...videoData, upvotes: likes });
  }

  function onDislikeClick(dislikes) {
    setVideoData({ ...videoData, downvotes: dislikes });
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Description
        video={videoData}
        onHideClick={onHideClick}
        onLikeClick={onLikeClick}
        onDislikeClick={onDislikeClick}
      />
      {isHidden ? null : <Comments video={videoData} />}
    </div>
  );
}

export default App;
