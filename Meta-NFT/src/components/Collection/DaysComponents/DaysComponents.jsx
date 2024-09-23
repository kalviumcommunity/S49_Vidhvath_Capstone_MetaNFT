import React from 'react';
import { MdVerified } from 'react-icons/md';
import Style from './DaysComponents.module.css';

const DaysComponents = ({ title, creator, price, image }) => {
    return (
        <div className={Style.DaysComponent}>
            <div className={Style.DaysComponent_box}>
                <div className={Style.daysComponent_box_img}>
                    <img src={image} className={Style.daysComponent_box_img_1} alt="NFT" />
                </div>
                <div className={Style.DaysComponent_box_profile}>
                    <img src={image} alt="profile" className={Style.daysComponent_box_img_1} />
                </div>
                <div className={Style.daysComponent_box_title}>
                    <h2>{title}</h2>
                    <div className={Style.DaysComponent_box_title_info}>
                        <div className={Style.DaysComponent_box_title_info_profile}>
                            <p>Creator
                                <span>{creator} <small><MdVerified /></small></span>
                            </p>
                        </div>
                        <div className={Style.DaysComponent_box_title_info_price}>
                            <small>{price}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaysComponents;
