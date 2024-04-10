import React from 'react'
import bull from '../Assets/Bull.png'
import bear from '../Assets/Bear.jpeg'
import bullbear from '../Assets/BullDear.jpeg'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
      <div>   
      <div className="container">
          <h1>CandleStick Patterns</h1>
          <p>Candlesticks are graphical representations of price movements for a given period of time. They are commonly formed by the opening, high, low, and closing prices of a financial instrument. If the opening price is above the closing price then a filled (normally red or black) candlestick is drawn.</p>
      </div>

    <div className="container content1 mt-3"> 
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
            <img className="images img-fluid mt-4" src={bull} alt="" width="550px" height="300px"/>

            </div>
            <div className="col-12 col-md-6 col-lg-6"><p className="m-5 text-success ">A Bull in the stock market means people are feeling good and think prices will go up,
so they start buying stocks. When investors are bullish, they buy stocks because they think they 
 make money. Bull markets happen when the economy is doing well, and everyone feels confident.
 During bull markets, investors are optimistic about the future
leading to increased buying activity and higher stock prices overall </p>
           <Link to='/Bullcandle'><p> <button className="button button14 rounded "  style={{width:"max-content" ,fontSize:"large"}}> Bull Candles</button></p></Link>
</div>
        </div>
    </div>
    <div className="container content1 mt-3">
    {/* <h2>Bear Candles</h2> */}
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
            <p className="m-5 text-danger">A "Bear" represents a pessimistic outlook on the market.
 Bears believe that stock prices will decline, prompting them to sell securities in anticipation 
  lower prices. A bear market typically signifies falling prices over an extended period, 
   accompanied by investor fear, economic downturns, or uncertainty. Bears are associated with caution, negativity,
and a tendency to sell securities in anticipation of future losses <br />          .
<Link to='/Bear'><button className="button mt-5 button15 rounded " style={{width:"max-content" ,fontSize:"large"}} >Bear Candles</button></Link></p>
  
            </div>
            <div className="col-12 col-md-6 col-lg-6 ">
             <img className="images img-fluid my-3" src={bear} alt="" />
               
               </div>
        </div>
    </div>
<div className="container content1 mt-3 mb-3 ">
    <div className="row mt-3">
    <img  className="imagess ms-2" src={bullbear} alt="" />
    <p className="ms-1 pt-2 my-3 para">"Bulls represent optimism in the stock market, believing that prices will rise 
and investing accordingly. They are confident in the economy's strength and expect 
 outcomes. Conversely, bears represent pessimism, fearing price declines and selling securities 
 to mitigate losses. Bear markets often coincide with economic downturns or uncertainties, causing 
 investors to adopt a defensive stance. Understanding both perspectives is crucial for navigating the 
 complexities of the market and making informed investment decisions."</p>
    </div>
</div>
    </div>

 )
}

export default Content