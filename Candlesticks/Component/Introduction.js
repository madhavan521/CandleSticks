import React from 'react';
// import intro from '../Assets/log.jpg' 
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="container intros">
    <div className="row">
      <div className="col">
      <div className="row mt-3" style={{ display: "block", borderRadius: "20px" }}>
        <div className="col p-4 col-md-12 col-sm-12">
          <h2 className="p-4 pb-0 welcome text-success" style={{fontFamily:"roboto"}}>Welcome To "Trade Spark"</h2>
          <p className="h6 welcome text-success ms-3" style={{fontFamily:"roboto"}}>"Gain knowledge on stock investment strategies"</p>
          <ul className="pt-3 ">
            <li>
              <Link to='/Candle'><button className="my-2 button1 button121">Get Started</button></Link>
           
              <Link to="/About"><button className="my-2  me-2 button1 button12">Learn More</button></Link>
            </li>
          </ul>
        </div>
      </div>

      </div>        
      {/*col-sm-12 col-md-12 <div className="col-lg-6 col-md-6 col-12">
      <img src="https://static.vecteezy.com/system/resources/previews/010/996/059/original/3d-rendering-bull-trend-candle-stick-icon-on-transparent-background-png.png" alt="" width="350px" height="280px" />


      </div> */}

    </div>
     
    </div>
  );
}

export default Introduction;
