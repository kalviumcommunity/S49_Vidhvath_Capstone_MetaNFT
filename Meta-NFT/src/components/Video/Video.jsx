import React from 'react';
import Style from './Video.module.css';

const Video = () => {
  const videoUrl = 'https://youtu.be/mImtEXf79Jk?si=7mrN-Q3OTDmfVGyJ'; // Replace with your video URL

  return (
    <div className={Style.Video}>
      <div className={Style.Videobox}>
        <h1><span>🎥</span> Trending Videos</h1>
        <p>Check out our trending videos. View more perspectives on just about any topic.</p>
        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <img src='https://media3.giphy.com/media/Xnqt96afMpn4Ivfge4/giphy.gif?cid=790b76113886900d90d7aa78065930dfb79ffdfba815587e&rid=giphy.gif&ct=g' alt="Video Image" />
          </div>
          <div className={Style.Video_box_frame_right}>
            <h2>Explore More Videos</h2>
            <p>
              Discover a wide range of perspectives and insights on various topics from our community.
            </p>
            <a href={videoUrl} className={Style.watchNowButton} >
            <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
