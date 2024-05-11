import React from 'react'
import { Slider, Brand } from '../components/componentindex'
import { SearchBar } from '../SearchPage/SearchPageindex'
import Filter from '../components/componentindex'
import { NFTCardTwo, Banner} from '../CollectionPage/Collectionindex'
// INTRNAL IMPORT 
import Style from '../styles/SearchPAge'

const SearchPAge = () => {

  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3
  ]
  return (
    <div className={Style.searchpage}>
      <Banner bannerImage={images.creatorbackground2} />
      <Filter/>
      <SearchBar />
      <Slider />
      <Brand />
    </div>
  )
}

export default SearchPAge