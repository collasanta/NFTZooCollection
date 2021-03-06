import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({id, name, properties, image}) => {
  return (
    <div className='collectionCard'>

      <img src={image} alt='' ></img>
      <div className='details'>

         <div className='name'>
            {name} <div className='id'>#{id}</div>
         </div>
   
         <div className='priceContainer'>
            <img src={ weth } className='wethImage' alt=''/>
            <div className='price'>{properties} <span>Eth</span></div>
         </div>
         
      </div>




    </div>
  )
}

export default CollectionCard