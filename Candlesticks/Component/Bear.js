import React from 'react'
import Bearcandle from './Bearcandle'
import Navbar from './Navbar'


const Bear = ({candles}) => {
  return (
    <div className="container">
    <Navbar />
    <Bearcandle candles={candles}/>
    </div>
  )
}

export default Bear