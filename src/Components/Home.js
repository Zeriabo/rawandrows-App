import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'semantic-ui-react'
import Intro from './Intro'
const Home = () => {
    return(
        <Carousel autoPlay='true' showArrows='true'  showIndicators swipeable='true' interval={3000}>
                
               
                <div class="carousel-item active">
                <div class="container">
                    <img src="images/images/medical-equipment.webp" />
                   <button type="button" class="btn btn-outline-info" onClick={() => {window.open('http://localhost:3000/Medicalequipments');}}>View now</button>
                   </div>
                </div>
                <div class="carousel-item active">
                <div class="container">
                    <img src="images/images/aboutus.jpeg" />
                   <button type="button" class="btn btn-outline-info" onClick={() => {window.open('http://localhost:3000/AboutUs');}}>View now</button>
                   </div>
                </div>
                <div class="carousel-item active">
                <div class="container">
                    <img src="images/images/contactus.jpeg" />
                   <button type="button" class="btn btn-outline-info" onClick={() => {window.open('http://localhost:3000/ContactUs');}}>View now</button>
                   </div>
                   
                </div>

            </Carousel>
    )
}

export default Home;