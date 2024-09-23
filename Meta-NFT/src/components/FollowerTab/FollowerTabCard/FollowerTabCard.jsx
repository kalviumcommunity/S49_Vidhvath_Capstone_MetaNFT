import React, { useState } from 'react';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import Style from './FollowerTabCard.module.css';

const FollowerTabCard = ({ el, i }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className={Style.card}>
      {/* Rank badge */}
      <div className={Style.rankBadge}>
        <span>#{i + 1}</span>
      </div>

      {/* Background image */}
      <img src={el.backgroundImg} alt="Background" className={Style.backgroundImg} />

      {/* Profile picture */}
      <img src={el.profilePic} alt={el.name} className={Style.profilePic} />

      {/* Info section */}
      <div className={Style.info}>
        {/* Earnings */}
        <p className={`${Style.earnings} ${Style.animatedEarnings}`}>
          {el.earnings}
        </p>

        {/* Creator Name */}
        <h3>{el.name} <TiTick className={Style.verifiedIcon} /></h3>

        {/* Follow/Unfollow Button */}
        <button className={`${Style.followBtn} ${isFollowing ? Style.following : ''}`} onClick={toggleFollow}>
          {isFollowing ? 'Following' : 'Follow'}
        </button>

        {/* Social Media Links */}
        <div className={Style.socialLinks}>
          <a href={`https://twitter.com/${el.twitter}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href={`https://discord.com/${el.discord}`} target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
