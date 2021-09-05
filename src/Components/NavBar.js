/* eslint-disable jsx-a11y/aria-proptypes */
import React from 'react';
import { Link } from 'react-scroll';
const url = process.env.PUBLIC_URL;

const NavBar = () => {
    return(
      <header>
 
<nav class="navbar navbar-expand-lg navbar-light bg-blue">
 
  <div class="container-fluid">
   
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Services">
          <Link 
        to="Services"
        activeClass="active"
        spy={true} 
        smooth={true}
    >Services    </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Products">  <Link 
        to="Products"
        activeClass="active"
        spy={true} 
        smooth={true}
    >Products    </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Team"><Link 
        to="Team"
        activeClass="active"
        spy={true} 
        smooth={true}
    >Team    </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Gallery">
            <Link 
        to="Gallery"
        activeClass="active"
        spy={true} 
        smooth={true}
    >Gallery    </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ContactUs">
          <Link 
        to="ContactUs"
        activeClass="active"
        spy={true} 
        smooth={true}
    >Contact us    </Link>
          </a>
        </li>
      </ul>
    
    </div>
   


    <div class="d-flex align-items-center">

      <a class="text-reset me-3" href="http://localhost:5000">
        <i class="fas fa-shopping-cart"></i>
      </a>

     
      <a
        class="text-reset me-3 dropdown-toggle hidden-arrow"
        href="http://localhost:5000 "
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fas fa-bell"></i>
        <span class="badge rounded-pill badge-notification bg-danger">1</span>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="http://localhost:5000 ">Some news</a>
        </li>
        <li>
          <a class="dropdown-item" href="http://localhost:5000 ">Another news</a>
        </li>
        <li>
          <a class="dropdown-item" href="http://localhost:5000 ">Something else here</a>
        </li>
      </ul>

   
      <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="http://localhost:5000 "
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
           src = {url+'/images/logo.jpg'}
          class="rounded-circle"
          height="25"
          width="200"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="http://localhost:5000 ">My profile</a>
        </li>
        <li>
          <a class="dropdown-item" href="http://localhost:5000 ">Settings</a>
        </li>
        <li>
          <a class="dropdown-item" href="http://localhost:5000 ">Logout</a>
        </li>
      </ul>
    </div>
    
  </div>
 
</nav>

    </header>
          
    )
}

export default NavBar;


