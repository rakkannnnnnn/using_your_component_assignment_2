import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '20px',
        maxWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={post.profileImage}
          alt="profile"
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />
        <h3 style={{ marginLeft: '15px' }}>{post.username}</h3>
      </div>
      <div style={{ marginTop: '10px' }}>
        <p>{post.content}</p>
        <LikeButton initialLiked={post.isLiked} />
      </div>
    </div>
  );
};

export default PostCard;