import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      <div className="Container "  style={{ 
          border: "1px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)" }}>
         <div className="row d-flex m-3 justify-content-center text-dark">
    <div className="col-12 col-lg-4 col-md-3 mx-auto d-flex justify-content-center"><a href="mailto:cmadhavan521@gmail.com">Contact</a>
</div>
    <div className="col-12 col-lg-4 col-md-3 mx-auto d-flex justify-content-center">
    
   <Link to="/Aboutus"> Team details</Link></div>
  <div className="col-12 col-lg-4 col-md-3 mx-auto d-flex justify-content-center"> <Link to="/Privacy"> Privacy</Link></div>
</div>
          <div className="row ">
              <ul className="list-inline d-flex mt-3 foot justify-content-center">
                  <li className="me-2  text-dark"><a href="https://twitter.com/cmadhavan521"> <i className=" list-inline-item fab fa-twitter">Twitter</i></a></li>
                  <li className="me-2  text-dark"><a href="https://www.facebook.com/madhavan.c.522"> <i className=" list-inline-item fab fa-facebook">Facebook</i></a></li>
                  <li className="me-2  text-dark"><a href="https://www.instagram.com/c.madhavan_/"> <i className=" list-inline-item fab fa-instagram">Instagram</i></a></li>
              </ul>
          </div>
      </div>
  )
}

export default Footer