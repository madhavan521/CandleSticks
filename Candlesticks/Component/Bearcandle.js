import React from 'react'
import { Link } from 'react-router-dom';

const Bearcandle = ({candles}) => {
  const bearcandle = candles.filter(candle=>candle.bear);
  return (
    <div className="container">
  <div className="row ms-3">
  <h1 className="mx-5 mt-4">Bearish Candlestick Pattern</h1>
  <p className="mt-3"> <i className="fa fa-star"></i> Bearish Reversal candlestick patterns indicate that the ongoing uptrend is going to reverse to a downtrend. <br /><br />

 <i className="fa fa-star"></i> Thus, the traders should be cautious about their long positions when the bearish reversal candlestick patterns are formed. <br /><br />

Below are the different types of bearish reversal candlestick chart patterns:</p>
    { bearcandle && bearcandle.map((candle)=>
      <Link to={`/Candle/${candle.id}`} className=" text-decoration-none text-dark card m-3 rounded col-12 col-md-6 col-lg-3" key={candle.id}>
                <img src={candle.image} className="m-2 pe-3" alt="" width="230px" height="200px" />
                <h2 className="h2">{candle.title}</h2>
                <a href="#" className="text-decoration-none"> More details </a>
                             
          </Link>
    )}
  </div>

  
    </div>
  )
}

export default Bearcandle