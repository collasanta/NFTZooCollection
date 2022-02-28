import React, { useEffect, useState } from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'

const Main = ({nftListData, selectedNft}) => {
   const [activeNft, setActiveNft] = useState(nftListData[0]);

   useEffect(()=>{
      setActiveNft(nftListData[selectedNft])
   }, [nftListData, selectedNft])

   return (
      <div className='main'>
           <div className='mainpicture'>
              <div className='nftContainer'>
                 <img className='selectedNft'

                 src={activeNft.image} 
                 
                 alt='' />
              </div>
           </div>
            <div className='maincontent'>
               <div className='nameid'>
                  <span className='name'>{activeNft.name}</span>
                  <span className='id'>#{activeNft.id}</span>
               </div>
               <div className='bottominfo'>
                  <div className='userinfo'>
                     <div> 0x1F0BcF7F5e5F61d50c9853A75C2Ad271b7b73B59 <br></br>
                     <span className='ownerinsta'>@w33agency</span>
                     </div>
                  </div>
                  <div className='social'>
                     <div >
                        <img src={instagramLogo} alt='' />
                     </div>
                     <div >
                        <img src={twitterLogo} alt='' />
                     </div>
                     <div >
                        <img src={moreIcon} alt='' />
                     </div>
                  </div>
               </div>
            </div>
      </div>
    )
}

export default Main

