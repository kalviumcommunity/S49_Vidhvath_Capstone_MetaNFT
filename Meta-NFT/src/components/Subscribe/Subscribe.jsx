import React from 'react';
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT

import images from '../../img';

import Style from './Subscribe.module.css'

const subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>subscribe to our super-exclusive drop list and be the first to know about upcoming drops</p>
        </div>
        <div className={Style.subscribe_box_left_box}>
          <span>01</span>
          <small>Get more discount</small>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premimum magazines</small>
          </div>
          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder='Enter your email' />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <img src={images.update} alt="get update " height={600} width={800} />
        </div>
      </div>
    </div>
  );
}

export default subscribe;
