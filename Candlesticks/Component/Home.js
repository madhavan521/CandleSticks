import React from 'react'
import Content from './Content';
import Footer from './Footer';
import Introduction from './Introduction';
import Navbar from './Navbar'; 
import Topapps from './Topapps';
import Topcrypto from './Topcrypto';
import Topindividual from './Topindividual';
import Topinverse from './Topinverse';
import Topten from './Topten';

const Home = ({login}) => {
  return (
    <div>
    <Navbar login={login} />
    <Introduction/>
    <Topten />
    <Topcrypto />
    <Topinverse /> 
       <Topapps />

   <Content/>
   <Footer/>
   </div>
  )
}

export default Home