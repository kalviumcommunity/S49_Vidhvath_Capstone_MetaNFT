import React, {useState} from 'react'
import {MdVerified, MdCloudUpload, MdTimer, MdReportProblem,MdOutlineDeleteSweep} from 'react-icons/md'
import {BsThreeDots} from 'react-icons/bs'
import {FaWallet, FaPercentage} from 'react-icons/fa'
import {  TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp  } from "react-icons/ti";
import {BiTransferAlt, BiDollar} from "react-icons/bi"

//INTERNAL IMPORT
import Style from "./NFTDescriptions.module.css"
import imgage from '../../img'
import { Button } from '../../components/componentindex'
import {NFTTabs} from '../NFTDetailsindex'

const NFTDescriptions = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/*PART ONE*/}
        <div className={Style>NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload className={Style.NFTDescription_box_share_box_box_icon} onClick={() => openSocial()}/>
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook />Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram />Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin />Linkin
                </a>
                <a href="#">
                  <TiSocialTwitter />Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube />Youtube
                </a>
              </div>
            )}
            <BsThreeDots className={Style.NFTDescription_box_share_box_box_icon} onClick={() => openNFTMenu()}/>
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar/> Change price
                </a>
                <a href="#">
                  <BiTransferAlt/> Transfer
                </a>
                <a href="#">
                  <MdReportProblem/> Report abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep/> Delete item
                </a>
              </div>
              
            )}
          </div>
        </div>
        <div className={Style.NFTDescription_box_share_box_profile}>
          <h1>BearX #23453</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <img src={images.user1} alt="profile" width={40 } height={40} className={Style.NFTDescription_box_profile_box_left_img}/>
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  Pawan <MdVerified/>
                </span>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_box_right}>
              <img src={images.user2} alt="profile" height={40} width={40} className={Style.NFTDescription_box_profile_box_left_img}/>
              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br/>
                <span>
                  Prabhas Varma <MdVerified/>
                </span>
              </div>
            </div>
          </div>


        </div>
        
      </div>
    </div>
  )
}

export default NFTDescriptions