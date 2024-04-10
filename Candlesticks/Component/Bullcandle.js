import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import Navbar from './Navbar'


const Bullcandle = ({ candles }) => {
  const specialCandles = candles.filter(candle => candle.special);

  return (
    <div>
    <Navbar />
    <div className="container">
    <div className="row ">
    <div className="mt-4 mb-4">
    <h1>Bullish Reversal Candlestick Patterns:</h1>
    <p className="mt-3">
    <i className="fa fa-star"></i> Bullish Reversal candlestick patterns indicate that the ongoing downtrend is going to reverse to an uptrend. <br />

    <i className="fa fa-star"></i>Thus, traders should be cautious about their short positions when the bullish reversal candlestick chart patterns are formed. <br />

Below are the different types of bullish reversal candlestick patterns:
    </p>
    </div>
     <hr />

      {specialCandles && specialCandles.map(candle => (
        <Link to={`/Candle/${candle.id}`} className=" ms-5 text-decoration-none text-dark card m-3 rounded col-12 col-md-6 col-lg-3" key={candle.id}>
                <img src={candle.image} className="m-2 pe-3" alt="" width="230px" height="200px" />
                <h2 className="h2">{candle.title}</h2>
                <a className="text-decoration-none"> More details </a>
                                            
          </Link>
      ))}
    </div>  </div></div>
  );
};

export default Bullcandle;