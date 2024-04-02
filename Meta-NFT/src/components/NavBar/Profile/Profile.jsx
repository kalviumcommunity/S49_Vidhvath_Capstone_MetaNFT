import React from 'react'
import {FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa';
import {MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

//INTERNAL IMPORT
import Style from './Profile.module.css';
import images from '../../../img';
const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <img src={images.user1} alt="user profile" width={50} height={50}
        className ={Style.profile_account_img}/>

        <div className={Style.profile_info}>
        <p>Vidhvath J</p>
        <small>X038499382920203</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
        <div className={Style.profile_menu_one_item}>
          <FaUserAlt/>
          <p>
            <link href={{pathaname: '/myprofile'}}> My Profile</link>
          </p>
          </div>
          <div className={Style.profile_menu_one_item}>
          <FaRegImage/>
          <p>
            <link href={{pathaname: '/my-items'}}> My Item</link>
          </p>
          </div>
          <div className={Style.profile_menu_one_item}>
          <FaUserEdit/>
          <p>
            <link href={{pathaname: '/edit-profile'}}> Edit Profile</link>
          </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter/>
            <p>
              <link href={{ pathname: "/help" }}>Help</link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <link href={{ pathname: "/disconnect"}}>Disconnect</link>
            </p>
          </div>
        </div>
      </div>
    </div>

   
  ) 
}

export default Profile