import React from 'react'

//INTERNAL IMPORT
import { NFTDescriptions, NFTDetailsimg, NFTTabs} from './NFTDetailsindex'
import Style from './NFTDetailPage.module.css'

const NFTDetailPage = () => {
  return (
    
    <div className={Style.NFTDetailPage}>
        <div className={Style.NFTDetailsPage_box}>
           <NFTDetailsimg/>
           <NFTDescriptions/>
        </div>
    </div>
  )
}

export default NFTDetailPage