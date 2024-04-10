import React from 'react'
import Navbar from './Navbar'

const Login = ({handleLogin}) => {
  return (
      
    <div>
      <Navbar />
    <div  className="Login m-5 d-flex justfiy-content-center">
        <div className="container d-flex justify-content-center">        
        <div className="row row-sm-12 d-flex justify-content-center m-5">     
               <h1 className="mt-3">TradeSpark</h1>
               <hr />

            <form action=""  className="mt-3" >
            <div className="form-group">
            <label htmlFor=""  className="h4">Username:</label>
            <input type="text"  className="rounded logintext  form-control" placeholder="Enter the Username" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="h4">Password:</label>
            <input type="text" className="rounded logintext form-control" placeholder="Enter the password"/></div>
                       <button className="bg-info rounded mt-3" width="90px" onChange={handleLogin}>Login</button>
</form>       

            </div>
        </div>
    </div></div>
  )
}

export default Login