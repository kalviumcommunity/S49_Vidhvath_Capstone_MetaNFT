import React, { useState } from 'react';
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialYoutube,
    TiSocialInstagram,
    TiSocialTwitter,
} from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';

// INTERNAL IMPORT
import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '../../components/componentindex';

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [reportError, setReport] = useState(false);

    const copyAddress = () => {
        const copyText = document.getElementById("myInput");
        navigator.clipboard.writeText(copyText.value);
        alert("Address copied to clipboard!");
    };

    const toggleShare = () => {
        setShare(prev => !prev);
        setReport(false);
    };

    const toggleReport = () => {
        setReport(prev => !prev);
        setShare(false);
    };

    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
                <div className={Style.AuthorProfileCard_box_img}>
                    <img
                        src={images.nft_image_1}
                        className={Style.AuthorProfileCard_box_img_img}
                        alt="NFT"
                        width={220}
                        height={220}
                    />
                </div>
                <div className={Style.AuthorProfileCard_box_info}>
                    <h2>Tony Stark <span><MdVerified /></span></h2>
                    <div className={Style.AuthorProfileCard_box_info_address}>
                        <input type="text" value="0x829BDndjnakjdNNLs" id="myInput" readOnly />
                        <FiCopy onClick={copyAddress} className={Style.AuthorProfileCard_box_info_address_icon} />
                    </div>
                    <p>
                        Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
                        Contributing to @ether_cards, an NFT Monetization Platform.
                    </p>
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
                    <MdCloudUpload onClick={toggleShare} className={Style.AuthorProfileCard_box_share_icon} />
                    {share && (
                        <div className={Style.AuthorProfileCard_box_share_upload}>
                            <p><span><TiSocialFacebook /></span> Facebook</p>
                            <p><span><TiSocialInstagram /></span> Instagram</p>
                            <p><span><TiSocialTwitter /></span> Twitter</p>
                            <p><span><TiSocialYoutube /></span> Youtube</p>
                            <p><span><TiSocialLinkedin /></span> LinkedIn</p>
                        </div>
                    )}
                    <BsThreeDots onClick={toggleReport} className={Style.AuthorProfileCard_box_share_icon} />
                    {reportError && (
                        <p className={Style.AuthorProfileCard_box_share_report}>
                            <span><MdOutlineReportProblem /></span> Report abuse
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthorProfileCard;
