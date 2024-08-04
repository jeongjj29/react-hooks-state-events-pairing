import React from "react";

function HideCommentsButton({ onHideClick }) {
  function handleClick() {
    onHideClick();
  }
  return (
    <button id="hideCommentsButton" onClick={handleClick}>
      HideCommentsButton
    </button>
  );
}

export default HideCommentsButton;
