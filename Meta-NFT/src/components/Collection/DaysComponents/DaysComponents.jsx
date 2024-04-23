import React from 'react'
import {MdVerified} from 'react-icons/md'

//INTERNAL IMPORT
import Style from './DaysComponents.module.css'
import images from '../../../img'

const DaysComponents = () => {
  return (
    <div className={Style.DaysComponent}>
        <div className={Style.DaysComponent_box}>
            <div className={Style.daysComponent_box_img}>
               <img src={images.creatorbackground1} className={Style.daysComponent_box_img_1} alt="profile background" width={500} height={300} objectFit="covers"/> 
            </div>
            <div className={Style.DaysComponent_box_profile}>
                <img src={images.creatorbackground1}  alt="profile" width={200} height = {200} className={Style.daysComponent_box_img_1} objectFit="covers" />
                <img src={images.creatorbackground2}  alt="profile" width={200} height = {200} className={Style.daysComponent_box_img_2} objectFit="covers" />

                <img src={images.creatorbackground3}  alt="profile" width={200} height = {200} className={Style.daysComponent_box_img_3} objectFit="covers" />

                <img src={images.creatorbackground4}  alt="profile" width={200} height = {200} className={Style.daysComponent_box_img_4} objectFit="covers" />

            </div>
            <div className={Style.daysComponent_box_title}>
                <h2>Amazing Collection</h2>
                <div className={Style.DaysComponent_box_title_info}>
                    <div className={Style.DaysComponent_box_title_info_profile}>
                        <img src={images.user1} alt="profile" width={30} height={30} objectFit='covers' className={Style.DaysComponent_box_title_info_profile_img}/>
                        <p>Creator
                            <span>Vidhvath J <small><MdVerified/></small></span>
                        </p>
                    </div>
                    <div className={Style.DaysComponent_box_title_info_price}>
                        <small>1.255 ETH</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DaysComponents