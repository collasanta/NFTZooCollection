import React from 'react'
import './Header.css'
import zooLogo from '../assets/header/zoologo.PNG'
import searchIcon from '../assets/header/search.png'


const Header
 = () => {
  return (
    <div className='header'>

      <div className='logoContainer'>
         <img src={zooLogo} className="zooLogo" alt=''></img>
      </div>
      
      <div className='searchBar'>
         <div className='searchIconContainer'>
            <img src={searchIcon} />
         </div>
         <input className='searchInput' placeholder='Collection, item or user...' />

      </div>

      <div className='headerItems'>
         <p>Drops</p>
         <p>MarketPlace</p>
         <p>Create</p>
      </div>

      <div className='getinContainer'>
         <button className='getinButton'>GET IN</button>
      </div>

    </div>
  )
}

export default Header

