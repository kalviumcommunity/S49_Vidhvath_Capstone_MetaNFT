import React, { useState } from 'react';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import Style from './FollowerTabCard.module.css';
import images from '../../../img';

const FollowerTabCard = ({ index }) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    setFollowing(prevFollowing => !prevFollowing);
  };

  return (
    <div className={Style.FollowerTabCard}>
      <div className={Style.FollowerTabCard_rank}>
        <p>
          #{index + 1} <span>🥇</span>
        </p>
      </div>

      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <img
            className="Style.FollowerTabCard_box_img_img"
            src={images.creatorbackground1}
            alt="profile background"
            width={500}
            height={300}
          />
        </div>
        <div className={Style.FollowerTabCard_box_profile}>
          <img
            src={images.user1}
            className={Style.FollowerTabCard_box_profile_img}
            alt="profile picture"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_info_name}>
            <h4>
              Spider Man <span>MdVerified</span>
            </h4>
            <p>12.321 ETH</p>
          </div>
          <div className={Style.FollowerTabCard_box_info_following}>
            {following ? (
              <a onClick={followMe}>
                Follow <span><TiTick /></span>
              </a>
            ) : (
              <a onClick={followMe}>Following</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
