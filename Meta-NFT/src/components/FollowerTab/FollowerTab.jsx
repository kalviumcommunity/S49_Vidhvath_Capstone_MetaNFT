import React, { useState } from 'react';
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine } from 'react-icons/ri';
import Style from './FollowerTab.module.css'; // Import your CSS file
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';

const FollowerTab = () => {
  const CardArray = [
    {
      id: 1,
      name: "Beeple",
      earnings: "68.2M ETH",
      profilePic: "https://th.bing.com/th?id=OSK.HEROp0Jbmwoo9oFgyb_F6mbh2Hawc8jmUYY3vUVM6AmHpNM&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
      backgroundImg: "https://th.bing.com/th/id/OIP.2lSrmIurAeorpebiLIiu9gHaED?w=326&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "Pak",
      earnings: "55M ETH",
      profilePic: "https://th.bing.com/th/id/OIP.MecTS4MKtPQzs3urL0wqawHaEK?w=678&h=381&rs=1&pid=ImgDetMain",
      backgroundImg: "https://th.bing.com/th/id/OIP.bNV4xVqsQdj1hDisu98cRgHaDt?w=332&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "XCOPY",
      earnings: "52M ETH",
      profilePic: "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/10/21191527/xcopy.jpeg",
      backgroundImg: "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https://substack-post-media.s3.amazonaws.com/public/images/84051647-4051-4af2-b58d-7302a35cf426_4096x4096.gif",
    },
    {
      id: 4,
      name: "FEWOCiOUS",
      earnings: "30M ETH",
      profilePic: "https://th.bing.com/th/id/R.b9cbc827e3dff58b412c16a20bbf08ae?rik=%2b8FWXRTVajLqoQ&riu=http%3a%2f%2fgothammag.com%2fget%2ffiles%2fimage%2fgalleries%2fFEWOCIOUS_2.jpg&ehk=17Nc7jxoIpsavf4matVpqToZRgrztKm%2bWlMU8qDnsx8%3d&risl=&pid=ImgRaw&r=0",
      backgroundImg: "https://th.bing.com/th/id/OIP.dzk9oSwp6UyvZhuOmT9phAHaDh?rs=1&pid=ImgDetMain",
    },
    // Add more creators as needed
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    setPopular(true);
    setFollowing(false);
    setNews(false);
  };

  const openFollower = () => {
    setPopular(false);
    setFollowing(true);
    setNews(false);
  };

  const openNews = () => {
    setPopular(false);
    setFollowing(false);
    setNews(true);
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.title}>
        <h2>Top NFT Creators List</h2>
        <div className={Style.tabs}>
          <div className={Style.tabs_btn}>
            <button onClick={openPopular}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={openFollower}>
              <RiUserUnfollowFill /> Following
            </button>
            <button onClick={openNews}>
              <RiAwardLine /> Noteworthy
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={el.id} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FollowerTab;
