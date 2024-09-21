import React, { useState, useCallback, useEffect } from 'react';
import { AiFillFire, AiFillHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines, TbArrowBigRightLine } from 'react-icons/tb';

// INTERNAL IMPORT
import Style from './BigNFTSlider.module.css';
import images from '../../img';
import Button from '../Button/Button';

// Modal Component
const Modal = ({ isOpen, onClose, title, bidDetails }) => {
  if (!isOpen) return null;

  return (
    <div className={Style.modalOverlay}>
      <div className={Style.modalContent}>
        <h3>{title}</h3>
        <p>Your bid has been placed!</p>
        <div>
          <strong>Bid Details:</strong>
          <ul>
            <li>Item: {bidDetails.title}</li>
            <li>Bid Amount: {bidDetails.price}</li>
            <li>Placed By: {bidDetails.name}</li>
            <li>Collection: {bidDetails.collection}</li>
          </ul>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function BigNFTSlider() {
  const [idNumber, setIdNumber] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 12
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
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 12
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
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 12
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
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 12
      }
    }
  ];

  // Update the timeLeft based on selected NFT
  useEffect(() => {
    setTimeLeft(sliderData[idNumber].time);
  }, [idNumber]);

  // Increment Function
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  // Decrement Function
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  // Countdown timer logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prevTime; // Timer has ended
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  // Handle Place Button Click
  const handlePlaceClick = () => {
    setModalOpen(true);
  };

  // Handle Close Modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <img className={Style.bigNFTSlider_box_left_creator_profile_img} src={sliderData[idNumber].image} alt="profile" width={50} height={50} />
              <div>
                <p>Creator</p>
                <h4>{sliderData[idNumber].name} <span><MdVerified /></span></h4>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire className={Style.bigNFTSlider_box_left_creator_icon} />
              <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div>
              <small>Current Bid</small>
              <p>{sliderData[idNumber].price} <span>$,221,21</span></p>
            </div>
            <p className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <MdTimer className={Style.bigNFTSlider_box_left_biddding_box_icon} />
              <span>Auction ending in</span>
            </p>
            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div>
                <p>{timeLeft.days}</p>
                <span>Days</span>
              </div>
              <div>
                <p>{timeLeft.hours}</p>
                <span>Hours</span>
              </div>
              <div>
                <p>{timeLeft.minutes}</p>
                <span>mins</span>
              </div>
              <div>
                <p>{timeLeft.seconds}</p>
                <span>secs</span>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={handlePlaceClick} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={dec} />
            <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={inc} />
          </div>
        </div>
        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <img src={sliderData[idNumber].nftImages} alt="NFT" className={Style.bigNFTSlider_box_right_box_img} />
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={sliderData[idNumber].title}
        bidDetails={{
          title: sliderData[idNumber].title,
          price: sliderData[idNumber].price,
          name: sliderData[idNumber].name,
          collection: sliderData[idNumber].collection,
        }}
      />
    </div>
  );
}

export default BigNFTSlider;
