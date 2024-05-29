import React from 'react'
import {  TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter , TiSocialFacebook} from 'react-icons/ti';


//INTERNAL IMPORT
import Style from './CollectionProfile.module.css';
import image from '../../img'


const CollectionProfile = () => {
    const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.CollectionProfile}>
        <div className={Style.collectionProfile_box}>
            <div className={Style.collectionProfile_box_left}>
                <img src={MdImageSearch.nft_image_1} alt="nft image"  width={800} height={800} className={Style.collectionProfile_box_left_img}/>
                <div className={Style.collectionProfile_box_left_social}>
                    <a href="#"><TiSocialFacebook/></a>
                    <a href="#"><TiSocialInstagram/></a>

                    <a href="#"><TiSocialLinkedin/></a>
                    <a href="#"><TiSocialTwitter/></a>


                </div>
            </div>
            <div className={Style.collectionProfile_box_middle}>
                <h1>Awesome NFTs Collection</h1>
                <p>Karan is home to 5,544 generative arts when colors reign supreme .Leave the drab reality and enter the world of karafuru Meseum of toys</p>
                <div className={Style.collectionProfile_box_middle_box}>
                    {cardArray.map((el, i)=>(
                        <div className={Style.collectionProfile_box_middle_box_item} key={i + 1}>
                            <small>${i + 1}95,4683</small>
                            <span>+ {i + 2}.11%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollectionProfile