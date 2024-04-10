import React from 'react'
import { useNavigate } from 'react-router'
import Candleintro from './Candleintro'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Candle = ({candles}) => {
  const dummy =candles.filter(candle=> candle.content)
   const navigate = useNavigate()
  
  function handleCandles(){
    navigate('/Candle/:id')
  }
  return (
      <div>
      <Navbar/>
      <Candleintro/>
      <hr />
      <div className="container ">
    <div className="row justify-content-center ms-3 <br/>">
    <h1>Candlestick</h1>
    <p className="mt-4">A candlestick is a way of displaying information about an asset’s price movement <br/> <br className="mt-4"/> <i className="fa fa-star"></i>  Candlestick charts are one of the most popular components of technical analysis, enabling traders to interpret price information quickly and from just a few price bars.

This article focuses on a daily chart, wherein each candlestick details a single day’s trading <br/> <br className="mt-4"/> <i className="fa fa-star"></i>  It has three basic features:


Before you start trading, it’s important to familiarise yourself with the basics of candlestick patterns and how they can inform your decisions.</p>
       <p>Candlestick charts originated in Japan over 100 years before the West had developed bar charts and point-and-figure charts <br className="mt-4"/> <i className="fa fa-star"></i>  In the 1700s, a Japanese man known as Homma discovered that as there was a link between price and the supply and demand of rice, the markets were also strongly influenced by the emotions of traders.

A daily candlestick chart shows the security’s open, high, low, and close prices for the day <br/> <br className="mt-4"/> <i className="fa fa-star"></i>  The candlestick’s wide or rectangle part is called the “real body” which shows the link between opening and closing prices.

This real body shows the price range between the open and close of that day’s trading.

When the real body is filled, black or red, then it means that the close is lower than the open and is known as the bearish candle <br/> <br className="mt-4"/> <i className="fa fa-star"></i>  It shows that the prices opened, the bears pushed the prices down and closed lower than the opening price.

If the real body is empty, white or green, then it means that the close was higher than the open, known as the bullish candle <br/> <br className="mt-4"/> <i className="fa fa-star"></i>  It shows that the prices opened, the bulls pushed the prices up and closed higher than the opening price.

The thin vertical lines above and below the real body are known as the wicks or shadows, which represent the high and low prices of the trading session.

The upper shadow shows the high price, and lower shadow shows the low prices reached during the trading session.</p>
        <img  className="images" src="https://media.warriortrading.com/2020/04/Candlestick-1.png" alt="" />
        <p className="mt-4"> <i className="fa fa-star"></i>  Before we jump into learning about different candlestick charts, there are a few assumptions that need to be kept in mind that are specific to the candlestick charts. <br /><br /> <i className="fa fa-star"></i>  

Strength is represented by a bullish or green candle, and weakness by a bearish or red candle. One should ensure that whenever they are buying, it is a green candle day, and whenever they are selling, ensure that it’s a red candle day. <br /><br /><i className="fa fa-star"></i>  
The textbook definition of a pattern states certain criteria, but one should state that there could be minor variations to the pattern depending on certain market conditions. <br /><br /><i className="fa fa-star"></i>  
One should look for a prior trend. If you are looking at a bullish reversal pattern, then the prior trend should be bearish, and if you are looking for a bearish reversal pattern, then the prior trend should be bullish.  <br /><br /></p>
       <hr /> 
       
       <h1 className="my-4">35 Types of Candlestick Patterns:</h1>
       <p> The candlestick patterns can be divided into:</p>
       <p className="ms-5">
       <ul className="ms-5" >
         <li className="text-dark">Bullish Reversal Patterns</li>
         <li className="text-dark">Bearish Reversal Patterns</li>
         <li className="text-dark">Continuation Patterns</li>
       </ul>
       </p>
       
       {dummy.map((candle) => (
            <Link to={`/Candle/${candle.id}`} className=" text-decoration-none candless candlecontainer text-dark card m-3 rounded col-12 col-md-6 col-lg-3" key={candle.id}>
                <img src={candle.image} className="m-2 pe-3" alt="" width="230px" height="200px" />
                <h2 className="h2">{candle.title}</h2>
                <a className="text-decoration-none"> More details </a>
                                            
          </Link>
        ))}  
         

    </div>  <Link to="/Explore">
    <div className="row mb-4 d-flex justify-content-center">
  <button className="  rounded explore">Explore All</button>
    </div></Link>
</div> 

  </div>
  )
}

export default Candle