import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
const Individual = ({ candles }) => {
    const { id } = useParams();
    const item = candles.find(item => item.id === parseInt(id));   
    
      return (
        <div>
            <Navbar /> 
            <div className="container mt-4">
                <div className="row d-flex justify-content-center"> 
                              <h1 className="mt-3">{item.title}</h1><hr />
             <h5>{item.tag}</h5>
            <img src={item.image}  alt="" className="exampleimg imageex mt-4 w-200 h-200" style={{borderRadius:"30px"}}/>
            <p className="my-4 mt-3">{item.description}</p>
            <hr />
            
            <h3 className="mb-2 mt-3">Real-Time Example </h3>

            <img   className="exampleimg imageexx  mt-3" src={item.example} alt="" />
            <p className="m-3 ">Above Example is the real-time view of candlestick in the trading </p>
         </div>
     </div>    
</div>
    );
};

export default Individual;