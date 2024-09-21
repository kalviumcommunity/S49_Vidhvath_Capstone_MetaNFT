import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import Style from './NFTCard.module.css';

const NFTCard = () => {
    const nftDetails = [
        {
            id: 1,
            name: 'CryptoPunk #7804',
            price: '4200 ETH',
            image: 'https://thedigitalyug.com/ImageStorage/nfts-meaning-history-popularity-cryptopunk.jpg',
            remainingTime: '2h: 30m: 15s',
        },
        {
            id: 2,
            name: 'Bored Ape #8817',
            price: '125 ETH',
            image: 'https://th.bing.com/th/id/OIP.g6j_2gEjpt-1F48X68Xw0QHaHa?rs=1&pid=ImgDetMain',
            remainingTime: '3h: 45m: 20s',
        },
        {
            id: 3,
            name: 'Art Blocks #1234',
            price: '15 ETH',
            image: 'https://nftevening.com/wp-content/uploads/2021/08/Fidenza-313-by-Tyler-Hobbs.png',
            remainingTime: '4h: 15m: 50s',
        },
        {
            id: 4,
            name: 'World of Women #2365',
            price: '5.5 ETH',
            image: 'https://nftlately.com/wp-content/uploads/2022/03/rainbow-woman-nft-by-world-of-women.jpg',
            remainingTime: '1h: 15m: 40s',
        },
        {
            id: 5,
            name: 'CryptoKitties #163',
            price: '0.5 ETH',
            image: 'https://th.bing.com/th/id/OIP.Wq_lRzGre8uT7upLGov5fAHaHa?rs=1&pid=ImgDetMain',
            remainingTime: '5h: 10m: 5s',
        },
        {
            id: 6,
            name: 'ZED RUN Horse #457',
            price: '8 ETH',
            image: 'https://www.appdupe.com/blog/wp-content/uploads/2021/05/EpjKCciU8AAgeak.jpg',
            remainingTime: '6h: 25m: 30s',
        },
        {
            id: 7,
            name: 'Meebit #9345',
            price: '3 ETH',
            image: 'https://th.bing.com/th/id/OIP.QG2X8jMCr8JrkLLOhyBKVwHaHZ?rs=1&pid=ImgDetMain',
            remainingTime: '7h: 50m: 10s',
        },
        {
            id: 8,
            name: 'Pudgy Penguins #4545',
            price: '2 ETH',
            image: 'https://i.seadn.io/gcs/files/e5762b6daa944a1317d0cd1024804585.png?auto=format&dpr=1&w=1000',
            remainingTime: '8h: 15m: 25s',
        },
        {
            id: 9,
            name: 'Doodles #2555',
            price: '4 ETH',
            image: 'https://pbs.twimg.com/media/FQTxAvLUYA8UJD8?format=jpg&name=large',
            remainingTime: '1h: 5m: 15s',
        },
    ];

    const [likes, setLikes] = useState(Array(nftDetails.length).fill(false)); // Initialize likes array

    const toggleLike = (index) => {
        const newLikes = [...likes];
        newLikes[index] = !newLikes[index]; // Toggle the like state for the specific NFT
        setLikes(newLikes);
    };

    return (
        <div className={Style.NFTCard}>
            {nftDetails.map((nft, index) => (
                <div className={Style.NFTCard_box} key={nft.id}>
                    <div className={Style.NFTCard_box_img}>
                        <img src={nft.image} alt={nft.name} width={600} height={600} className={Style.NFTCard_box_img_img} />
                    </div>
                    <div className={Style.NFTCard_box_update}>
                        <div className={Style.NFTCard_box_update_left}>
                            <div className={Style.NFTCard_box_update_left_like} onClick={() => toggleLike(index)}>
                                {likes[index] ? (
                                    <AiFillHeart />
                                ) : (
                                    <AiOutlineHeart className={Style.NFTCard_box_update_left_like_icon} />
                                )}
                                {""} 22
                            </div>
                        </div>
                        <div className={Style.NFTCard_box_update_right}>
                            <div className={Style.NFTCard_box_update_right_info}>
                                <small>Remaining time</small>
                                <p>{nft.remainingTime}</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCard_box_update_details}>
                        <div className={Style.NFTCard_box_update_details_price}>
                            <div className={Style.NFTCard_box_update_details_price_box}>
                                <h4>{nft.name}</h4>
                                <div className={Style.NFTCard_box_update_details_price_box_box}>
                                    <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                        <small>Current Bid</small>
                                        <p>{nft.price}</p>
                                    </div>
                                    <div className={Style.NFTCard_box_update_details_price_box_stock}>
                                        <small>Available</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.NFTCard_box_update_details_category}>
                            <BsImages />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NFTCard;
