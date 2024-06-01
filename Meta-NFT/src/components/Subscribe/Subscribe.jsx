// Subscribe.jsx

import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import images from '../../img';
import Style from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>Subscribe to our super-exclusive drop list and be the first to know about upcoming drops.</p>
          <div className={Style.subscribe_box_left_box}>
            <div>
              <span>01</span>
              <small>Get more discounts</small>
            </div>
            <div>
              <span>02</span>
              <small>Get premium magazines</small>
            </div>
          </div>
          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <img src={images.update} alt="get update " />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
