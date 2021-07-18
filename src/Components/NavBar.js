/* eslint-disable jsx-a11y/aria-proptypes */
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
  
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div class="navbar transparent " style={{ position: 'sticky' }}>
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" fixed-top clean-navbar>
        

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
 <ReactBootStrap.Nav className="ms-auto" variant="tabs"
   
      style={{ maxHeight: '500px' }}  
      navbarScroll> 
    <Link to="/Home">

    <ReactBootStrap.Nav.Link href="#Home" aria-activedescendant><p style={{fontfamily:'Courier New'}}>Home</p></ReactBootStrap.Nav.Link>
    </Link>
  
    <Link to="/Medicalequipments">
    <ReactBootStrap.Nav.Link href="#MedicalEquipments"><p style={{fontfamily:'Courier New'}}>Medical equipments</p></ReactBootStrap.Nav.Link>
    </Link>
 <Link to="/AboutUs">
    <ReactBootStrap.Nav.Link href="#AboutUs"><p style={{fontfamily:'Courier New'}}>About us</p></ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/ContactUs">
    <ReactBootStrap.Nav.Link eventKey={2} href="#ContactUs">
    <p style={{fontfamily:'Brush Script MT',}}>Contact us</p>
      </ReactBootStrap.Nav.Link>
    </Link>
    
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse> 
  
     <center><a class="brand"   href="/Home"><img src="/images/logo.jpg" style={{   width: '25%' }}  alt="RawsAndRows" /></a></center>   

        
</ReactBootStrap.Navbar>

        </div>
        
          
          
    )
}

export default NavBar;


