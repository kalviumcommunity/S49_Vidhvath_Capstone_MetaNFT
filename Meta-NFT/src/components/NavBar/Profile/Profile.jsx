import React from 'react'
import {FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa';
import {MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import { Link } from 'react-router-dom';

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
            <Link to={{pathaname: '/myprofile'}}> My Profile</Link>
          </p>
          </div>
          <div className={Style.profile_menu_one_item}>
          <FaRegImage/>
          
          <p>
            <Link to={{pathaname: '/my-items'}}> My Item</Link>
          </p>
          </div>
          <div className={Style.profile_menu_one_item}>
          <FaUserEdit/>
          <p>
            <Link to={{pathaname: '/edit-profile'}}> Edit Profile</Link>
          </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter/>
            <p>
              <Link to={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link to={{ pathname: "/disconnect"}}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>

   
  ) 
}

export default Profile