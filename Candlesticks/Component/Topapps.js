import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
const Topapps = () => {   
    const top=[
        {
            id: 1,
            title: "Zerodha Kite",
            image: "https://www.businessapac.com/wp-content/uploads/2022/09/Zerodha-Kite.jpg"
          },
          {
            id: 2,
            title: "Angel One",
            image: "https://bestmediainfo.com/uploads/2021/08/AngelOne-Logo_3.jpg"
          },
          {
            id: 3,
            title: "Upstox App",
            image: "https://upstox.com/app/uploads/2021/09/featured-img-copy2-450x265.gif"
          },
          {
            id: 4,
            title: "Groww App",
            image: "https://www.entertales.com/wp-content/uploads/2022/10/Groww-768x432.jpg"
          },
          {
            id: 5,
            title: "Paytm Money",
            image: "https://www.estrade.in/wp-content/uploads/2019/02/PAYTM-MONEY-LOGO.jpeg"
          },
          {
            id: 6,
            title: "5paisa App",
            image: "https://tradebrains.in/features/wp-content/uploads/2022/04/5-Paisa-Cover-Image.jpg"
          },
          {
            id: 7,
            title: "ICICI Direct App",
            image: "https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/78/32/ec/7832ec07-8bf0-de58-46a8-cfb481b073b2/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
          },
          {
            id: 8,
            title: "EdelweissApp",
            image: "https://th.bing.com/th/id/OIP.Ty1y8oVvQSKS-ypFGYFBuwAAAA?rs=1&pid=ImgDetMain"
          },
          {
            id: 9,
            title: "FYERS",
            image: "https://forefrontsports.ie/wp-content/uploads/2023/11/F.jpg"
          },
          {
            id: 10,
            title: "AliceBlue App",
            image: "https://tradebrains.in/wp-content/uploads/2021/07/alice-blue-logo.jpg"
          }
        ];
var settings = {
  // dots: true,
  autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <div>
    
    <div className="container"><hr />
    <h3>Top 10 Brokerage Apps </h3>
    {/* <hr /> */}
        <div className="row">  
         <Slider {...settings} className="cardinfo">
      {top.map((tops)=>
        <div className="card cards">
            <div className="  slider-container content13 mx-4" key={tops.id}>  
            <Link to="/Topin">
          <img src={tops.image} alt="" className="mt-3 mx-3 d-flex justify-content-center" width="130px" height="100px" />
             </Link></div> 
                       <h6 className="ms-5" style={{textDecoration:"none"}}>{tops.title}</h6>

            </div>
            /* </div> */
        )} </Slider>  
        <hr className="mt-3" />
            
        </div>
    </div>
    
    </div>
  )
}
 

export default Topapps