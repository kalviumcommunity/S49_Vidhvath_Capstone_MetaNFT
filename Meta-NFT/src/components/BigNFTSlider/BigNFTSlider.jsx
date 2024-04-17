
import React, {useState, useEffect, useCallback } from 'react';
import {AiFillFire, AiFillHeart, AiOutlineBehanceSquare} from 'react-icons/ai';
import {MdVerified, MdTimer} from 'react-icons/md';
import {TbArrowBigLeftLines, TbArrowBigRightLine} from 'react-icons/tb';

//INTERNAL IMPORT
import Style from './BigNFTSlider.module.css';
import images from '../../img';
import Button from '../Button/Button';  

function BigNFTSlider() {
  const [idNumber, setIdNumber] = useState(0);
  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Vidhvath J",
      collection: "Meta",
      price: "1.000000 ETH",
      like: 243,
      image: images.user1,
      nftImages: images.nft_image_1,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        seconds:12
      }

    },
    {
      title: "Hello Universe",
      id: 2,
      name: "Spider_Man",
      collection: "verse",
      price: "0.320000 ETH",
      like: 243,
      image: images.user2,
      nftImages: images.nft_image_2,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        seconds:12
      }

    },
    {
      title: "Hello Space",
      id: 3,
      name: "Iron_Man",
      collection: "Hyper",
      price: "0.045000 ETH",
      like: 243,
      image: images.user3,
      nftImages: images.nft_image_3,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        seconds:12
      }

    },

    {
      title: "Hello Creators",
      id: 4,
      name: "Selena Gomez",
      collection: "Music",
      price: "0.345600 ETH",
      like: 243,
      image: images.user4,
      nftImages: images.nft_image_1,
      time:{
        days: 27,
        hours: 10,
        minutes: 11,
        seconds:12
      }

    }
  ]

  //....INC 
const inc = useCallback(()=> {
  if (idNumber + 1 <sliderData.length) {
    setIdNumber(idNumber + 1);

  }
}, [idNumber, sliderData.length] );


  //....DEC
  const dec = useCallback(()=> {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
  
    }
  }, [idNumber] );

  
  
  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <img className= {Style.bigNFTSlider_box_left_creator_profile_img}src={sliderData[idNumber].image} alt="profile image" width={50} height={50} />
              <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                <p>Creator</p>
                <h4>{sliderData[idNumber].name} <span><MdVerified/></span></h4>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire className={Style.bigNFTSlider_box_left_creator_icon}/>
              <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                <p>collection</p>
                <h4>{sliderData[idNumber].collection}</h4>

              </div>
            </div>
          </div>
          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_biddding_box}>
              <small>Current Bid </small>
              <p>{sliderData[idNumber].price} <span>$,221,21</span></p>
            </div>
            <p className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <MdTimer className={Style.bigNFTSlider_box_left_biddding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
        <p>{sliderData[idNumber].time.days}</p>
        <span>Days</span>
    </div>

    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
        <p>{sliderData[idNumber].time.hours}</p>
        <span>Hours</span>
    </div>

    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
        <p>{sliderData[idNumber].time.minutes}</p>
        <span>mins</span>
    </div>

    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
        <p>{sliderData[idNumber].time.seconds}</p>
        <span>secs</span>
    </div>
</div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}}/>
              <Button btnName="View" handleClick={()=> {}}/>

            </div>
          </div>
          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines className={Style.bigNFTSlider_box_left_sliderBtn_icon}
            onClick={()=>  dec()}/>

            <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_icon}
            onClick={()=>  inc()}/>
          </div>
        </div>
        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <img src={sliderData[idNumber].nftImages} alt="NFT IMAGE" className={Style.bigNFTSlider_box_right_box_img}/>
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart/>
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigNFTSlider