import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'


const Topten = () => {    
    const top=[
        {
            id: 1,
            title: "Reliance Industries Ltd",
            image: "https://th.bing.com/th/id/OIP.XBlnWRYjrvD7lyBBbZtPogHaEq?w=280&h=180&c=7&r=0&o=5&pid=1.7"
          },
          {
            id: 2,
            title: "Bajaj Auto Ltd",
            image: "https://democraticjagat.com/upload/news/1610019238.jpg"
          },
          {
            id: 3,
            title: "Maruti Suzuki India Ltd",
            image: "https://storage.unitedwebnetwork.com/files/874/975968ab6dfdf56cd92c65ac0fdd14e2.jpg"
          },
          {
            id: 4,
            title: "Adani Ports and Special Economic Zone Ltd",
            image: "https://th.bing.com/th/id/OIP.abdsgY1JngsoaoBs3-TQRAHaEn?rs=1&pid=ImgDetMain"
          },
          {
            id: 5,
            title: "Bharat Petroleum Corporation Ltd",
            image: "https://mobilecom.in/wp-content/uploads/2021/10/Bharat-Petroleum-Logo-PNG.jpg"
          },
          {
            id: 6,
            title: "Eicher Motors Ltd",
            image: "https://www.autolooks.net/uploads/6/4/5/5/6455546/eicher-logo_orig.jpeg"
          },
          {
            id: 7,
            title: "Sun Pharmaceutical Industries Ltd",
            image: "https://www.americanbazaaronline.com/wp-content/uploads/2016/12/Sun-Pharmaceutical-Industries-Ltd-1.jpg"
          },
          {
            id: 8,
            title: "Larsen & Toubro Ltd",
            image: "https://seekvectorlogo.com/wp-content/uploads/2018/01/larsen-toubro-vector-logo.png"
          },
          {
            id: 9,
            title: "HDFC Life Insurance Company Ltd",
            image: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/10/08160412/HDFC-Life-launches-Insure-India-Campaign.jpg"
          },
          {
            id: 10,
            title: "Kotak Mahindra Bank Ltd",
            image: "https://img.etb2bimg.com/files/retail_files/company/thumb_logo-Kotak_Mahindra_Bank-1432207154.png"
          },
          {
            id: 11,
            title: "IndusInd Bank Ltd",
            image: "https://financeglad.com/wp-content/uploads/2019/08/Indusind-bank.jpg"
          }
]
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
 
    <div className="container">   <hr className="mb-2"/>
    <h3>Top 10 Companies </h3>
    {/* <hr /> */}
        <div className="row">  
        <div className="col col-sm-justify-items-mx-2">
         <Slider {...settings}>
      {top.map((tops)=>
        <div className="card cards candlecontainer1 ">
            <div className="  slider-container content13 mx-4" key={tops.id}>  
            <Link to="/Topin">
            <img src={tops.image} alt="" className="mt-3 mx-3 d-flex justify-content-center" width="120px" height="100px" />
            </Link></div> 
          
            </div>
            /* </div> */
        )} </Slider>  </div>
        <h className="mt-3" />
            
        </div>
    </div>
    
    </div>
  )
}

export default Topten