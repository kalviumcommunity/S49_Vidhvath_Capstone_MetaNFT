import React, { useState } from 'react';
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialYoutube, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { BsThreeBots } from 'react-icons/bs';

//INTERNAL IMPORT
import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '../../components/componentindex';

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [reportError, setReport] = useState(false);

    const copyAddress = () => {
        const input = document.getElementById('myInput');
        input.select();
        document.execCommand('copy');
    };

    const openShare = () => {
        // Define the functionality to open share here
        setShare(true);
    };

    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
                <div className={Style.AuthorProfileCard_box_img}>
                    <img src={images.nft_images_1} className={Style.AuthorProfileCard_box_img_img} alt="NFT IMAGES" width={220} height={220} />
                </div>
                <div className={Style.AuthorProfileCard_box_info}>
                    <h2>Tony Stack <span><MdVerified /></span></h2>
                    <div className={Style.AuthorProfileCard_box_info_address}>
                        <input type="text" value="0x829BDndjnakjdNNLs" id="myInput" />
                        <FiCopy onClick={() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon} />
                    </div>
                    <p> Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs. Contributing to @ether_cards, an NFT Monetization Platform</p>
                    <div className={Style.AuthorProfileCard_box_info_social}>
                        <a href="#"><TiSocialFacebook /></a>
                        <a href="#"><TiSocialInstagram /></a>
                        <a href="#"><TiSocialLinkedin /></a>
                        <a href="#"><TiSocialYoutube /></a>
                        <a href="#"><TiSocialTwitter /></a>
                    </div>
                </div>
                <div className={Style.AuthorProfileCard_box_share}>
                    <Button btnName="Follow" handleClick={() => {}} />
                    <MdCloudUpload onClick={() => openShare()} className={Style.AuthorProfileCard_box_share_icon} />
                </div>
            </div>
        </div>
    );
};

export default AuthorProfileCard;
