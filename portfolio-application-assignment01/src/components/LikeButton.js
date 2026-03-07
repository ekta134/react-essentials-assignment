
import React, { useState } from "react";

function LikeButton(){

  const [likes, setLikes] = useState(128);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return(
    <button onClick={handleLike} className="like-btn">
      <ion-icon name="heart-outline"></ion-icon>{likes}
    </button>
  );
}

export default LikeButton;