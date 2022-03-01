import React from 'react'
import CollectionCard from './CollectionCard'
import './Nftlist.css'

const NftList = ({ nftListData, setSelectedNft }) => {
   
  return (
    <div className='nftlist'>
       {nftListData.map(nft=>(
          <div onClick={() => setSelectedNft(nft.id-1)} >
            <CollectionCard 
            key = {nft.id}
            id = {nft.id}
            name = {nft.name}
            properties = {nft.properties.price}
            image = {nft.image}
            />
          </div>
       ))}
    </div>
  )
}

export default NftList