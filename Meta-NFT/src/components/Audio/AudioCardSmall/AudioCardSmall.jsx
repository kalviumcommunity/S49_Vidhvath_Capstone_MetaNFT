import React, { useState } from "react";
import { TiMediaPlay, TiMediaPause } from 'react-icons/ti'; // Assuming these are icons for play and pause

// Assuming `LikeProfile` component is imported from somewhere


// Assuming `images` is imported correctly and `creatorbackground1` is a valid key
import images from '../../../img'; // You need to import images and ensure correct path

// Assuming `Style` is imported correctly
import Style from './AudioCardSmall.module.css';

const AudioCardSmall = () => {
    const [play, setPlay] = useState(false);

    const playMusic = () => {
        setPlay(!play); // Toggling play state
    }

    return (
        <div className={Style.audioPlayer}>
            <div className={Style.audioPlayer_box}>
                <img src={images.creatorbackground1} alt="music" width={100} height={100} className={Style.audioPlayer_box_img} />
                <div className={Style.audioPalyer_box_info}>
                    <h4>NFT music #1142</h4>
                    <div className={Style.audioPlayer_box_info_box}>
                       
                        <div className={Style.audioPlayer_box_info_box_price}>
                            <small>Price</small>
                            <p>1.00 ETH</p>
                        </div>
                    </div>
                </div>
                <div className={Style.audioPlayer_box_playBtn} onClick={playMusic}>
                    {play ? <TiMediaPause /> : <TiMediaPlay />}
                </div>
            </div>
        </div>
    );
};

export default AudioCardSmall;
