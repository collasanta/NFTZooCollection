import React, { useEffect, useState } from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import w33logo from '../assets/w33logo.png'


const Main = ({nftListData, selectedNft, loading}) => {
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

{/* <div className='nameid' style={{ color: '#fff'}}>
<div className='title'>
      {activeNft.name} 
</div>
<span className='itemNumber'>
   #{activeNft.id}
</span>
</div>

<div className='owner'>
<div className='ownerImageContainter'>
  <img src={w33logo} />
</div>

<div className='ownerDetails'>
<div className='ownerNameAndHandle'>
  <div> 0x1F0BcF7F5e5F61d50c9853A75C2Ad271b7b73B59 </div>
  <div className='ownerHandle'>@w33agency</div>
  <div className='ownerLink'>
     <img src={instagramLogo} alt='' />
  </div>
  <div className='ownerLink'>
     <img src={twitterLogo} alt='' />
  </div>
  <div className='ownerLink'>
     <img src={moreIcon} alt='' />
  </div>
</div>
</div>
</div> */}
