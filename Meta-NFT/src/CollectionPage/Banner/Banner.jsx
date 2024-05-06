import React from 'react'
import Image from 'next/image'


//INTERNAL IMPORT
import STyle from './Banner.module.css'

const Banner = () => {
  return (
    <div className={Stype.banner}>
      <div className={Style.banner_img}>
        <img src={bannerImage} objectFit="cover" alt="background" width ={1600} height={300} />
      </div>
      <div className={Style.banner_img_mobile}>
      <img src={bannerImage} objectFit="cover" alt="background" width ={1600} height={900} />
      </div>
    </div>
  )
}

export default Banner