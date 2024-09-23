import React, { useState } from 'react';
import { BsFillAlarmFill } from 'react-icons/bs';
import Style from './Collection.module.css';
import DaysComponent from './DaysComponents/DaysComponents';

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    // Example NFT collections data
    const collections = [
        {
            id: 1,
            title: "CryptoPunks",
            creator: "Larva Labs",
            price: "65.00 ETH",
            image: "https://th.bing.com/th/id/OIP.T6zERzacXinMzDxPnihBpwHaHa?rs=1&pid=ImgDetMain"
        },
        {
            id: 2,
            title: "Bored Ape Yacht Club",
            creator: "Yuga Labs",
            price: "82.00 ETH",
            image: "https://th.bing.com/th/id/OIP._GQC_Ykyy2wkLqqbetXuOgHaHa?rs=1&pid=ImgDetMain"
        },
        {
            id: 3,
            title: "Art Blocks",
            creator: "Art Blocks",
            price: "5.50 ETH",
            image: "https://th.bing.com/th/id/OIP._s8Ix8Gf2N-ArP_SjzshOAHaJQ?rs=1&pid=ImgDetMain"
        },
        {
            id: 4,
            title: "World of Women",
            creator: "Women of Web3",
            price: "3.00 ETH",
            image: "https://i.pinimg.com/originals/3f/26/38/3f263896bb2dac24be258db5cb30eb5a.jpg"
        },
        {
            id: 5,
            title: "Doodles",
            creator: "Doodle Labs",
            price: "6.50 ETH",
            image: "https://pbs.twimg.com/media/FLFsGKvXEAgtjUn?format=jpg&name=large"
        },
        {
            id: 6,
            title: "Clone X",
            creator: "RTFKT Studios",
            price: "7.50 ETH",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9df5f1139944271.623a2d6308147.png"
        },
    ];

    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => setPopular(true) || setFollowing(false) || setNews(false)}>
                            <BsFillAlarmFill /> Last 24 hours
                        </button>
                        <button onClick={() => setFollowing(true) || setPopular(false) || setNews(false)}>
                            <BsFillAlarmFill /> Last 7 days
                        </button>
                        <button onClick={() => setNews(true) || setPopular(false) || setFollowing(false)}>
                            <BsFillAlarmFill /> Last 30 days
                        </button>
                    </div>
                </div>
            </div>
            {popular && (
                <div className={Style.collection_box}>
                    {collections.map((collection) => (
                        <DaysComponent 
                            key={collection.id} 
                            title={collection.title} 
                            creator={collection.creator}
                            price={collection.price}
                            image={collection.image}
                        />
                    ))}
                </div>
            )}
            {following && (
                <div className={Style.collection_box}>
                    {/* Following Collections can go here */}
                </div>
            )}
            {news && (
                <div className={Style.collection_box}>
                    {/* News Collections can go here */}
                </div>
            )}
        </div>
    );
}

export default Collection;
