import React from 'react'
import './NFT.css'
import { FaEthereum } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function NFT() {
  return (
    <div className='main-base'>
      <div className='image'>
        <div className='image-hover'>
          <a><AiFillEye className='eye'/></a>
        </div>
        <img src={require('../images/image-equilibrium.jpg')} />
      </div>
      <div className='title'><a>Equilibrium #3429</a></div>
      <div className='text'>Our Equilibrium collection promotes balance and calm.</div>
      <div className='items'>
        <div className='prize'>
          <FaEthereum className='mr-[5px] mt-1'/>
          0.041 ETH
        </div>
        <div className='day'>
          <AiFillClockCircle className='mr-[7px] mt-1'/>
          <a className='justfy-center'>3 days left</a> 
        </div>
      </div>
      <div className='profile'>
        <img src={require('../images/image-avatar.png')} className='mt-[-7px]'/>
        <p>Creation of</p>&nbsp;<a>Jules Wyvern</a> 
      </div>
    </div>
  )
}

export default NFT