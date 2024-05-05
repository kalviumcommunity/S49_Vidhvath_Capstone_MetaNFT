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
                    <img src='https://lh3.googleusercontent.com/vW6IQ6yjNn-R4KbRweKCQSSi_M0gcjT3JfhI8A9bJmn0IkZBsGgmT7dt7N064BqVzzJV9N1I7x178FdfBwakgP3U180z0TLlYYAhh0rkV5RH6anPWOulowEGTxP6da9T1p1nzBRB' alt="Video Image" width={1920} height={1920} objectFit='cover'/>
                </div>
                <div className={Style.Video_box_frame_right}></div>
            </div>
        </div>
    </div>
  )
}

export default Video