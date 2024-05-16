import React from 'react'


//INTERNAL IMPORT 
import { Button, Category, Brand } from '../components/componentindex'
import NFTDetailPage from '../NFTDetails/NFTDetailPage'


const NFTDetails = () => {
  return (
    <div>
        <NFTDetailPage />
        <Category/>
        <Brand/>
        
    </div>
    

  )
}

export default NFTDetails