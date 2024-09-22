import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import images from '../../img'; // Adjust your import based on your project structure

// INTERNAL IMPORTS
import Style from "./Category.module.css";

const Category = () => {
  const categories = [
    {
      title: "Art",
      nftsCount: "2300 NFTs",
      imgSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/197948286/original/5ab5683a1095531abf6a87b4555496ce9276d88e/design-unique-nft-crypto-art.jpg', // Replace with actual image path
    },
    {
      title: "Music",
      nftsCount: "1200 NFTs",
      imgSrc: 'https://cdn.shopify.com/s/files/1/0002/9091/4356/articles/MUSIC_NFT_1.jpg?v=1657675515', // Replace with actual image path
    },
    {
      title: "Games",
      nftsCount: "1800 NFTs",
      imgSrc: 'https://th.bing.com/th/id/OIP.lPB1I6ra_J1ElFqUwFISqgAAAA?rs=1&pid=ImgDetMain', // Replace with actual image path
    },
    {
      title: "Collectibles",
      nftsCount: "2500 NFTs",
      imgSrc: 'https://th.bing.com/th/id/OIP.zK48u2MvA-4whzyeQyUhjwHaEd?w=2560&h=1541&rs=1&pid=ImgDetMain', // Replace with actual image path
    },
    {
      title: "Photography",
      nftsCount: "900 NFTs",
      imgSrc: 'https://th.bing.com/th/id/OIP.qZFk8NhNs7CNwNSrD3zUrAHaEJ?rs=1&pid=ImgDetMain', // Replace with actual image path
    },
  ];

  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {categories.map((category, i) => (
          <div className={Style.category_box} key={i}>
            <img
              src={category.imgSrc}
              className={Style.category_box_img}
              alt={`${category.title} category`}
              width={350}
              height={150}
              style={{ objectFit: 'cover' }} // Inline style for objectFit
            />
            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{category.title}</h4>
                <small>{category.nftsCount}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
