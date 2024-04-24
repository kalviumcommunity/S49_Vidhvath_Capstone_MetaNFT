import React, { useState } from 'react';
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine } from 'react-icons/ri';
import Style from './FollowerTab.module.css'; // Import your CSS file
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';

const FollowerTab = () => {
  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const FollowingArray = [1, 2, 3, 4, 5, 6];
  const NewsArray = [1, 2, 3, 4, 5];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.title}>
        <h2>Top Creators List..</h2>
        <div className={Style.tabs}>
          <div className={Style.tabs_btn}>
            <button onClick={openPopular}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={openFollower}>
              <RiUserUnfollowFill /> Following
            </button>
            <button onClick={openNews}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.box}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      <div className={Style.member}>
        <div className={Style.member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become author </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
