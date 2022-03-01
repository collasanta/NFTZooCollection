import React, { useEffect, useState } from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import opensea from '../assets/opensea.png'

const Main = ({nftListData, selectedNft}) => {
   const [activeNft, setActiveNft] = useState(nftListData[0]);

   useEffect(()=>{
      setActiveNft(nftListData[selectedNft])
   }, [nftListData, selectedNft])

   const etheraddress = '0x1f0bcf7f5e5f61d50c9853a75c2ad271b7b73b59'

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

               <div className='openSea'>
                  <a href={`https://testnets.opensea.io/${etheraddress}`} target="_blank"><img src={opensea}alt=''/></a>
               </div>

               <div className='bottominfo'>
                  <div className='userinfo'>
                     <div> {etheraddress} <br></br>
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

