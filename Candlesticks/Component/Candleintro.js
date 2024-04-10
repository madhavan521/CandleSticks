import React from 'react'
import founder from "./Founder.jpg"
const Candleintro = () => {
  return (
    <div>
    <div className="container mt-4">
        <div className="row">            <h1>Founder of Candles</h1>

            <div className="col-12 col-md-6 col-lg-6">
                <p className="m-5">Munehisa Honma (本間 宗久, Honma Munehisa) (also known as Sokyu Honma or Sokyu Homma and sometimes called the God of markets ; 1724–1803) was a rice merchant from Sakata, Japan who traded in the Dōjima Rice Exchange in Osaka during the Tokugawa Shogunate. He is sometimes considered to be the father of the candlestick chart, 
                a form of technical analysis used in stock markets.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <img  className="images img-fluid" src={founder} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Candleintro