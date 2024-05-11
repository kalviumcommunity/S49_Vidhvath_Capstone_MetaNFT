import React, { useState, useEffect } from 'react'

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, NFTCardtwo } from '../CollectionPage/Collectionindex'
import { Brand, FollowerTab, Title } from '../components/componentindex'
import images from '../img'
import { Discover } from '../components/NavBar';
import {AuthorProfileCard, AuthorTaps, TabCard} from "../authorPage/componentindex"

const author = () => {
    const popularArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
        images.user6,
        images.user7,
        images.user8,
    ]

    const [collectiables, setCollection] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setlike] = useState(false);
    const [follower, setfollower] = useState(false);
    const [following, setFollowing] = useState(false);
  return (
        <div className={Style.banner}>
            <Banner bannerImage={images.creatorbackground2}/>
            <AuthorProfileCard />
            <AuthorTaps 
            collectiables={setcollectiables} 
            like={setLike} 
            follower={setFollower}
            following={setfollowing}/>
           <Title heading="Popular Creators" paragraph="Click on music icon and enjoy NFT music or audio" />
           {popularArray.map((el, i)=> (
            <FollowerTab key={i + 1} i={i} el={el}/>
           ))}
           <Brand/>
        </div>
  )
}

export default author