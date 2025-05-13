import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? '#ff7675' : '#dfe6e9',
        color: liked ? 'white' : 'black',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {liked ? 'Liked ❤️' : 'Like ♡'}
    </button>
  );
};

export default LikeButton;