import React, { useState } from 'react';
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet, FaPercentage } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti';
import { BiTransferAlt, BiDollar } from 'react-icons/bi';

// INTERNAL IMPORT
import Style from './NFTDescriptions.module.css';
import images from '../../img'; // corrected import
import Button from '../../components/Button/Button' // assumed to be in the same parent directory
import NFTTabs from '../NFTTabs/NFTTabs'; // assumed to be in the same parent directory

const NFTDescriptions = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provenance, setProvenance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];

  const provenanceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];

  const ownerArray = [
    images.user1,
    images.user8,
    images.user4,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    setSocial(!social);
    if (!social) setNFTMenu(false);
  };

  const openNFTMenu = () => {
    setNFTMenu(!NFTMenu);
    if (!NFTMenu) setSocial(false);
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText === "Bid History") {
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    } else if (btnText === "Provenance") {
      setHistory(false);
      setProvenance(true);
      setOwner(false);
    }
  };

  const openOwner = () => {
    setOwner(!owner);
    if (!owner) {
      setHistory(false);
      setProvenance(false);
    }
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* PART ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload className={Style.NFTDescription_box_share_box_box_icon} onClick={openSocial} />
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}
            <BsThreeDots className={Style.NFTDescription_box_share_box_box_icon} onClick={openNFTMenu} />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abuse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={Style.NFTDescription_box_share_box_profile}>
          <h1>BearX #23453</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <img src={images.user1} alt="profile" width={40} height={40} className={Style.NFTDescription_box_profile_box_left_img} />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  Pawan <MdVerified />
                </span>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_box_right}>
              <img src={images.user2} alt="profile" height={40} width={40} className={Style.NFTDescription_box_profile_box_left_img} />
              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span>
                  Prabhas Varma <MdVerified />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.NFTDescription_box_profile_biding}>
          <p>
            <MdVerified /> <span>Auction ending in:</span>
          </p>
          <div className={Style.NFTDescription_box_profile_biding_timer}>
            <div className={Style.NFTDescription_box_profile_biding_timer_item}>
              <p>2</p>
              <span>Days</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_timer_item}>
              <p>22</p>
              <span>Hours</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_timer_item}>
              <p>45</p>
              <span>Minutes</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_timer_item}>
              <p>28</p>
              <span>Seconds</span>
            </div>
          </div>
          <div className={Style.NFTDescription_box_profile_biding_box_price}>
            <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
              <small>Current Bid</small>
              <p>1.000 ETH <span>( = $3,221.22)</span></p>
            </div>
            <span>[96 in stock]</span>
          </div>
          <div className={Style.NFTDescription_box_profile_biding_box_button}>
            <Button icon={<FaWallet />} btnName="Place a bid" handleClick={() => { }} classStyle={Style.button} />
            <Button icon={<FaPercentage />} btnName="Place a bid" handleClick={() => { }} classStyle={Style.button} />
          </div>
          <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
            <button onClick={(e) => openTabs(e)}>Bid History</button>
            <button onClick={(e) => openTabs(e)}>Provenance</button>
            <button onClick={openOwner}>Owner</button>
          </div>
          {history && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={historyArray} />
            </div>
          )}
          {provenance && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={provenanceArray} />
            </div>
          )}
          {owner && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={ownerArray} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTDescriptions;
