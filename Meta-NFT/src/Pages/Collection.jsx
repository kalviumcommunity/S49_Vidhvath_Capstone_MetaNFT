import React from 'react'

//INTERNAL IMPORT
// import Style from '../styles/Collection.module.css'
import images from '../img'
import {Banner, CollectionProfile, NFTCardtwo} from '../CollectionPage/Collectionindex'
import {Slider, Brand} from '../components/componentsindex'
import Filter from '../components/Filter/Filter'

const Collection = () => {

  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ]
  return (
    <div className={Style.collection}>
        <Banner BannerImage={images.creatorbackground1} />
        <CollectionProfile />
        <NFTCardtwo NFTData={collectionArray}/>
        <Filter/>

        <Brand/>
    </div>
  )
}

export default Collection