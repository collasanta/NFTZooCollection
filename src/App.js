import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { ThirdwebSDK } from "@3rdweb/sdk";
import NftList from './components/NftList';
import Main from './components/Main';

function App() {

const [nftListData, setNftListData] = useState([]);
const [loading, setLoading] = useState(true);
const [selectedNft, setSelectedNft] = useState(0);

useEffect(() => {
   const GetMyNfts = async() => {
      setLoading(true)
      const provider = 'https://rinkeby-light.eth.linkpool.io';
      const sdk = await new ThirdwebSDK(provider);
      const module = await sdk.getNFTModule("0x84b12b2F83e276c7024a40B77209AE626D71c67f");
      const nfts = await module.getAll();   
      nfts.shift();
      setNftListData(nfts);
      setLoading(false)
      
   };
  GetMyNfts();
}, []);

  return (
      <div className='app'>
         <Header />
         {loading ? (<div class='loadingtext'>Connecting to Ethereum...</div>) : ( <Main nftListData={nftListData} selectedNft={selectedNft}/> )}
         {loading ? (<div class="loader">Loading...</div>) : ( <NftList nftListData={nftListData} setSelectedNft={setSelectedNft}/>  )}
      </div>
  );
}

export default App;

