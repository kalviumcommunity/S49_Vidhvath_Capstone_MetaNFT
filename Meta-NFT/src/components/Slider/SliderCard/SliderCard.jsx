import React from 'react';
import { motion } from 'framer-motion';
import Style from './SliderCard.module.css';
import LikeProfile from '../../LikeProfile/LikeProfile';

const SliderCard = ({ title, currentBid, remainingTime, imageUrl }) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <img src={imageUrl} alt={title} />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>{title}</p>
          <div className={Style.sliderCard_box_title_like}>
            <LikeProfile />
            <small>1 of 100</small>
          </div>
        </div>
        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>{currentBid}</p>
          </div>
          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>{remainingTime}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
