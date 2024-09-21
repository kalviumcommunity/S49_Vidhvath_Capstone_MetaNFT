import React from 'react';

// INTERNAL IMPORT
import Style from './Brand.module.css';
import images from '../../img';
import { Button } from '../../components/componentindex';

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <img src={images.logo1} alt="brand logo" width={100} height={100} />
          <h1>Earn free crypto with MetaNFT</h1>
          <p>A creative agency that leads and inspires.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button btnName="Create" className="createButton" handleClick={() => {}} />
            <Button btnName="Discover" className="discoverButton" handleClick={() => {}} />
          </div>
        </div>

        <div className={Style.Brand_box_right}>
          <img src='https://th.bing.com/th/id/OIP.CXBZodOHZwy5uSxgaYW8TQHaEK?rs=1&pid=ImgDetMain' alt="brand logo" width={800} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
