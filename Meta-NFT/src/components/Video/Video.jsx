import React from 'react'

//INTERNAL IMPORT
import Style from './Video.module.css'
import images from '../../img'

const Video = () => {
  return (
    <div className={Style.Video}>
        <div className={Style.Videobox}>
            <h1><span>🎥</span></h1>
            <p>Check out our trending videos. View more perspectives on just about any topic </p>
            <div className={Style.Video_box_frame}>
                <div className={Style.Video_box_frame_left}>
                    <img src='' alt="Video Image" width={1920} height={1920} objectFit='cover'/>
                </div>
                <div className={Style.Video_box_frame_right}></div>
            </div>
        </div>
    </div>
  )
}

export default Video