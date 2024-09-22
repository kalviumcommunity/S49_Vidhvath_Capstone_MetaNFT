import React, { useState } from 'react';
import { FaFilter, FaAngleDown, FaAngleUp, FaWallet, FaMusic, FaVideo, FaImages, FaUserAlt } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import Style from './Filter.module.css';

const Filter = () => {
    const [filter, setFilter] = useState(false);  // Start with filter closed
    const [image, setImage] = useState(false);
    const [video, setVideo] = useState(false);
    const [music, setMusic] = useState(false);

    // Toggle filter options
    const openFilter = () => {
        setFilter(!filter);
    };

    const toggleImage = () => {
        setImage(!image);
    };

    const toggleVideo = () => {
        setVideo(!video);
    };

    const toggleMusic = () => {
        setMusic(!music);
    };

    return (
        <div className={Style.filter}>
            <div className={Style.filter_box}>
                <div className={Style.filter_box_left}>
                    <button>NFTs</button>
                    <button>Arts</button>
                    <button>Music</button>
                    <button>Sports</button>
                    <button>Photography</button>
                </div>
                <div className={Style.filter_box_right}>
                    <div className={Style.filter_box_right_box} onClick={openFilter}>
                        <FaFilter />
                        <span>Filter</span> {filter ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
            </div>

            {filter && (
                <div className={Style.filter_box_items}>
                    <div className={Style.filter_box_items_box_items}>
                        <div className={Style.filter_box_items_box_item}>
                            <FaWallet /> <span>0.01 ETH - 10 ETH</span>
                            <AiFillCloseCircle />
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box} onClick={toggleImage}>
                        <div className={Style.filter_box_items_box_item_trans}>
                            <FaImages /> <small>Images</small>
                            {image ? <TiTick /> : <AiFillCloseCircle />}
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box} onClick={toggleVideo}>
                        <div className={Style.filter_box_items_box_item_trans}>
                            <FaVideo /> <small>Videos</small>
                            {video ? <TiTick /> : <AiFillCloseCircle />}
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box} onClick={toggleMusic}>
                        <div className={Style.filter_box_items_box_item_trans}>
                            <FaMusic /> <small>Music</small>
                            {music ? <TiTick /> : <AiFillCloseCircle />}
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans}>
                            <FaUserAlt /> <small>Verified</small>
                            <MdVerified />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;
