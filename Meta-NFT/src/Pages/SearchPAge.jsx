import React from 'react';
import { Slider, Brand, Filter } from '../components/componentindex';
import { Banner } from '../CollectionPage/Collectionindex';

// INTERNAL IMPORT
import Style from '../styles/SearchPAge.module.css';  // Ensure the path is correct
import images from '../img';  // Ensure this is the correct path to your images object

const Search = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3
  ];

  return (
    <div className={Style.searchpage}>
      <Filter />
      <Slider />
      <Brand />
    </div>
  );
};

export default Search;
