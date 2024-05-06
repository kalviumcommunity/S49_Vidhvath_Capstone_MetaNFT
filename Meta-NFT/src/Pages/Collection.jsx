import React from 'react'

//INTERNAL IMPORT
import Style from '../styles/Collection.module.css'
import images from '../img'
import {Banner, CollectionProfile} from '../CollectionPage/Collectionindex'
import {Slider, Brand} from '../components/componentsindex'
import Filter from '../components/Filter/Filter'

const Collection = () => {
  return (
    <div className={Style.collection}>
        <Banner BannerImage={images.creatorbackground1} />
        <CollectionProfile/>
    </div>
  )
}

export default Collection