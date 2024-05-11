import React, { useState } from 'react';
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialYoutube, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';

//INTERNAL IMPORT
import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '../../components/componentindex';

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [reportError, setReport] = useState(false);

    const copyAddress = () => {
        const copyText = document.getElementById("myInput");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };

    const openShare = () => {
        if (!share) {
            setShare(true);
            setReport(false);
        } else {
            setShare(false);
        }
    };

    const openReport = () => {
        if (!reportError) {
            setReport(true);
            setShare(false);
        } else {
            setReport(false);
        }
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
                    {share && (
                        <div className={Style.AuthorProfileCard_box_share_upload}>
                            <p>
                                <span><TiSocialFacebook /></span> Facebook
                            </p>
                            <p>
                                <span><TiSocialInstagram /></span> Instagram
                            </p>
                            <p>
                                <span><TiSocialTwitter /></span> Twitter
                            </p>
                            <p>
                                <span><TiSocialYoutube /></span> Youtube
                            </p>
                            <p>
                                <span><TiSocialLinkedin /></span> LinkedIn
                            </p>
                        </div>
                    )}
                    <BsThreeDots onClick={() => openReport()} className={Style.AuthorProfileCard_box_share_icon} />

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
