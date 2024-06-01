// Video.jsx

import React from 'react';
import Style from './Video.module.css';
import images from '../../img';

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Videobox}>
        <h1><span>🎥</span> Trending Videos</h1>
        <p>Check out our trending videos. View more perspectives on just about any topic.</p>
        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <img src={images.video_image} alt="Video Image" />
          </div>
          <div className={Style.Video_box_frame_right}>
            <h2>Explore More Videos</h2>
            <p>
              Discover a wide range of perspectives and insights on various topics from our community.
            </p>
            <button>Watch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
