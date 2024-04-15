import React from 'react'
import Style from "./HeroSection.module.css"
import { Button } from '../componentindex';
import images from '../../img';

const HeroSection = () => {
  return (
    <div className={Style.HeroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs 🌌 </h1>
          <p>Discover the most outstanding NFTs in all topic and its the best platform you can ever find for all your NFTs and sell them</p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <img src={images.hero} alt =" Hero section " width={600} height={600}/>
        </div>

       </div>
    </div>
  )
}

export default HeroSection