import React from 'react'

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import image from "../../img"
import { NFTCardTwo } from '../../CollectionPage/Collectionindex'
import FOllowerTabCard from '../../components/FollowerTab/FollowerTabCard/FollowerTabCard'

const AuthorNFTCardBox = (collectiables, created, like, follower, following) => {

    const collectiablesArray = [
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

    const CreatedArray =  [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3
    ]

    const likeArray = [
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
    ]

    const FollowerArray = [
         images.user1,
         images.user10,
         images.user2,
         images.user3,
         images.user5,
         images.user4,
    ]

    const followingArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
        images.user6,
    ]
  return (
    <div className={Style.AuthorNFTCardBox}>
        {collectiables && <NFTCardTwo NFTData={collectiablesArray}/>}
        {created && <NFTCardTwo NFTData={createdArray}/>}
        {like && <NFTCardTwo NFTData={likeArray}/>}
        {follower && <NFTCardTwo NFTData={followerArray}/>}
        {following && <NFTCardTwo NFTData={followingArray}/>}
    </div>
  )
}

export default AuthorNFTCardBox