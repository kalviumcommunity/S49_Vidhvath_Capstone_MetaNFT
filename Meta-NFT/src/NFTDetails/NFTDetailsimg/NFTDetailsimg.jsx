import React, { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Style from './NFTDetailimg.module.css';
import images from '../../img';

const NFTDetailsimg = () => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    setDescription(!description);
  };

  const openDetails = () => {
    setDetails(!details);
  };

  const likeNFT = () => {
    setLike(!like);
  };

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={likeNFT}>
              {like ? (
                <AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />
              ) : (
                <AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />
              )}
              <span>23</span>
            </p>
          </div>
          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <img src={images.nft_image_1} className={Style.NFTDetailsImg_box_NFT_img_img} alt="NFT image" width={700} height={800} />
          </div>
        </div>
        <div className={Style.NFTDetailsImg_box_description} onClick={openDescription}>
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>Its Time for MetaNFT</p>
          </div>
        )}

        <div className={Style.NFTDetailsImg_box_details} onClick={openDetails}>
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <small>2000 X 20000 px.IMAGE(685KB)</small>
            <p>
              <small>Contact Address</small>
              <br></br>
              0xdaffanjkbrafman425439ssnf
            </p>
            <p>
              <small>Token ID</small>
              10003000372864
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsimg;
