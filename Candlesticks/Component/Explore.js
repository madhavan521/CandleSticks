import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Explore = ({ candles }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (search) => {
        const searchTerm = search.toUpperCase()
        setSearchTerm(searchTerm);
    };

    const Candles = candles.filter(candle => candle.title.toUpperCase().includes(searchTerm));

    return (
        <div><Navbar />
            <div className="container">
                
                <div className="row mt-5 row-sm-12">
                  

                <div className="row ms-2 row-sm-12">
                    <h1 className="my-4">35 Types of Candlestick Patterns:</h1>
                    <p> The candlestick patterns can be divided into:</p>
                    <p className="ms-1">
                        {/* <ul className="ms-1 d-flex listitem" > */}
                        <li className="listitem  mt-2 ">
    <Link to="/Bullcandle">* Bullish Reversal Patterns</Link>
    
</li>

                          <li className="listitem mt-2 ">  <Link to="/Bear"> * Bearish Reversal Patterns</Link></li>
                          <li className="listitem mt-2 "> <Link to="/"> * Continuation Patterns</Link></li> 
                        {/* </ul> */}
                    </p> 
                    <hr /> <form  width="60%"  className="mt-4">
                       
                       <div className=" ms-2"> <input
                            onChange={(e) => handleSearch(e.target.value)}
                            type="search"
                            role="button"
                           className="form-control ms-4"
                            style={{ textAlign: "center",width:"90%" }}
                            placeholder="Search with Candlestick Name"
                            
                     />
                   {/* <button> <i className="fa fa-search " style={{fontWeight:"bolder",width:"40px"}}></i></button> */}
                     </div>
                    </form>
               
                <hr className="mt-5"/>
                    {Candles.map((candle) => (
                        <Link
                            to={`/Candle/${candle.id}`}
                            className="text-decoration-none mt-3 candless candlecontainer text-dark card m-3 rounded col-12 col-md-6 col-lg-3"
                            key={candle.id}
                        >
                            <img src={candle.image} className="m-2 pe-3" alt="" width="230px" height="200px" />
                            <h2 className="h2">{candle.title}</h2>
                            <a className="text-decoration-none"> More details </a>
                        </Link>
                      
                    ))}
                </div>  
            </div> </div>
        </div>
    );
}

export default Explore;
