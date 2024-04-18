import React from 'react'
import {BsCircleFill} from 'react-icons/bs';
import images from '../../img';

//INTERNAL IMPORTS
import Style from "./Category.module.css";

const Category = () => {
    const CategoryArray = [1, 2, 3, 4, 5];
  return (
    <div className={Style.box_category}>
    <div className={Style.category}>
        {CategoryArray.map((el,i)=>(
            <div className={Style.category_box} key={1 + 1}>
                <img src={images.creatorbackground1} className={Style.category_box_img } alt='Background image' width={350} height={150} objectFit='cover'  />
                <div className={Style.category_box_title}>
                    <span>
                        <BsCircleFill/>
                    </span>
                    <div className={Style.category_box_title_info}>
                        <h4>Enterainment</h4>
                        <small>1995 NFTs</small>

                    </div>
                </div>

            </div>
        ))}
    </div>
    </div>
  )
}

export default Category