import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Banner from "../Banner"
import { Parallax } from 'rc-scroll-anim';
import { Player } from 'video-react';
import  MapContainer from "./MyMap";
import "../../node_modules/video-react/dist/video-react.css";
<link rel="stylesheet" href="/css/video-react.css" />
const url = process.env.PUBLIC_URL;


const Home = () => {
    return(<>
   
    <center>
    < div style={{height : '300'}}>
    <Player
      playsInline
      poster="/assets/poster.png"
      src = {url+'/Videos/intro.mp4'}
      fluid={false}
      height={500}
      autoPlay muted
        
    />
    </div>
    </center>
  
   
      <div  class="section footer-variant-2 footer-modern context-dark section-top-image section-top-image-light">

</div>
    <div class="page">
  <section class="section section-md bg-info section-top-image">
        <div class="container">
          <div id="Services" class="row row-30 justify-content-center">

         
          <Parallax
          animation={{ x: 2 }}
          style={{ transform: 'translateX(-100px)', margin: '5px auto' }}
          className="code-box-shape"
        >
           <article class="box-icon-ruby">
                <div class="unit box-icon-ruby-body flex-column flex-md-row text-md-left flex-lg-column align-items-center text-lg-center flex-xl-row text-xl-left">
                  
                  <div class="unit-left">
                    <div class="box-icon-ruby-icon linearicons-leaf"></div>
                  </div>
                  
                  <div class="unit-body">
                    <h4 class="box-icon-ruby-title"><a href="#">Natural &amp; Organic</a></h4>
                  </div>
                </div>
              </article>
            
          </Parallax>
          <Parallax
          animation={{ scale: 1 }}
          style={{ transform: 'scale(0)', margin: '5px auto' }}
          className="code-box-shape"
        >
          
          <article class="box-icon-ruby">
                <div class="unit box-icon-ruby-body flex-column flex-md-row text-md-left flex-lg-column align-items-center text-lg-center flex-xl-row text-xl-left">
                  <div class="unit-left">
                    <div class="box-icon-ruby-icon linearicons-shovel"></div>
                  </div>
                  <div class="unit-body">
                    <h4 class="box-icon-ruby-title"><a href="#">Best Equipment</a></h4>
                  </div>
                </div>
              </article>
     
            
          </Parallax>
          <Parallax
         animation={{ x1: 1 }}
          style={{ margin: '5px auto' }}
          className="code-box-shape"
        >
          
          <article class="box-icon-ruby">
                <div class="unit box-icon-ruby-body flex-column flex-md-row text-md-left flex-lg-column align-items-center text-lg-center flex-xl-row text-xl-left">
                  <div class="unit-left">
                    <div class="box-icon-ruby-icon linearicons-sun"></div>
                  </div>
                  <div class="unit-body">
                    <h4 class="box-icon-ruby-title"><a href="#">Dedicated Team</a></h4>
                  </div>
                </div>
              </article>
     
            
          </Parallax>
             
            
        
            <div class="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay=".2s">
             
            </div>
          </div>
        </div>
      </section>
     
      <section class="section section-md bg-info">
        <div class="container">
          <div class="row row-40 justify-content-center">
          <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
        >
           <div class="col-sm-8 col-md-7 col-lg-6 wow fadeInLeft" data-wow-delay="0s">
                <div class="product-banner"><img src="images/64.jpg" alt="" width="570" height="715"/>
                  <div class="product-banner-content">
                    <div class="product-banner-inner" style={{backgroundimage: "url(images/bg-brush.png)"}}  >
                      <h3 class="text-secondary-1">organic</h3>
                      <h2 class="text-primary"> </h2>
                    </div>
                  </div>
                </div>
              </div>
          </Parallax>
             
            
      
          </div>
        </div>
      </section>
     

         
              <div id="Products"class="row row-30 justify-content-center">
                <div class="col-sm-6 col-md-12 col-lg-6">
                <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
          className="code-box-shape"
       >
                  <div class="oh-desktop">
                   
                    <article class="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-5-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Avocados</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price product-price-old">$59.00</div>
                            <div class="product-price">$28.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  </Parallax>
                </div>
                
                <div class="col-sm-6 col-md-12 col-lg-6">
                <Parallax
          animation={{ scale: 1 }}
          style={{ transform: 'scale(0)', margin: '10px auto' }}
          className="code-box-shape">
                  <div class="oh-desktop">
                   
                    <article class="product product-2 box-ordered-item wow slideInLeft" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-6-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Corn</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price">$27.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  </Parallax>
                </div>
                <div class="col-sm-6 col-md-12 col-lg-6">
                <Parallax
          animation={{ rotate: 10 }}
          style={{ margin: '5px auto' }}
          className="code-box-shape"
        >
                  <div class="oh-desktop">
                  
                    <article class="product product-2 box-ordered-item wow slideInLeft" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-8-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Artichokes</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price">$23.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  </Parallax>
                </div>
                <div class="col-sm-6 col-md-12 col-lg-6">
                <Parallax
          animation={{ rotate: -10 }}
          style={{ margin: '5px auto' }}
          className="code-box-shape"
        >
                  <div class="oh-desktop">
                
                    <article class="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-7-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Broccoli</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price">$25.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  </Parallax>
                </div>
              </div>
          
       
      <section class="section text-center">
        <div class="parallax-container" data-parallax-img="images/bg-parallax-1.jpg">
          <div class="parallax-content section-xl section-inset-custom-1 context-dark bg-overlay-40">
            <div class="container">
              <h2 class="oh font-weight-normal"><span class="d-inline-block wow slideInDown" data-wow-delay="0s">Our Approach</span></h2>
              <p class="oh big text-width-large"><span class="d-inline-block wow slideInUp" data-wow-delay=".2s">Our farm strictly combines the traditions of organic farming with the latest innovations to make our products healthy and safe for the clients.</span></p><a class="button button-primary button-icon button-icon-left button-ujarak wow fadeInUp" href="https://www.youtube.com/watch?v=-AhmuMqZB0s" data-lightgallery="item" data-wow-delay=".1s"><span class="icon mdi mdi-play"></span>View presentation</a>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-md bg-info section-top-image" id="products" data-type="anchor">
        <div class="container">
          <div class="row row-40 justify-content-center flex-md-row-reverse">
            <div class="col-sm-8 col-md-7 col-lg-6 wow fadeInLeft" data-wow-delay="0s">
              <div class="product-banner"><img src="images/home-banner-2-570x715.jpg" alt="" width="570" height="715"/>
                <div class="product-banner-content">
                  <div class="product-banner-inner" style={{backgroundimage: "url(images/bg-brush.png)"}}  > 
                    <h3 class="text-primary">fresh</h3>
                    <h2 class="text-secondary">Fruits</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-lg-6">
              <div class="row row-30 justify-content-center">
                <div class="col-sm-6 col-md-12 col-lg-6">
                  <div class="oh-desktop">
                
                    <article class="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-1-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Peaches</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price product-price-old">$59.00</div>
                            <div class="product-price">$28.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="col-sm-6 col-md-12 col-lg-6">
                  <div class="oh-desktop">
                 
                    <article class="product product-2 box-ordered-item wow slideInLeft" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-3-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Apples</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price">$21.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="col-sm-6 col-md-12 col-lg-6">
                  <div class="oh-desktop">
                   
                    <article class="product product-2 box-ordered-item wow slideInLeft" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-4-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Kiwis</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price">$26.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="col-sm-6 col-md-12 col-lg-6">
                  <div class="oh-desktop">
                  
                    <article class="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
                      <div class="unit flex-row flex-lg-column">
                        <div class="unit-left">
                          <div class="product-figure"><img src="images/product-2-270x280.png" alt="" width="270" height="280"/>
                            <div class="product-button"><a class="button button-md button-white button-ujarak" href="#">Add to cart</a></div>
                          </div>
                        </div>
                        <div class="unit-body">
                          <h6 class="product-title"><a href="#">Blueberries</a></h6>
                          <div class="product-price-wrap">
                            <div class="product-price">$23.00</div>
                          </div><a class="button button-sm button-secondary button-ujarak" href="#">Add to cart</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <div  class="section footer-variant-2 footer-modern context-dark section-top-image section-top-image-dark">

</div>
      <section class="section section-md bg-info" id="team" data-type="anchor">
        <div id="Team" class="container">
          <div class="oh">
            <h2 class="wow slideInUp" data-wow-delay="0s">Our Team</h2>
          </div>
          <div class="row row-30 justify-content-center">
            <div class="col-md-6 col-lg-4 col-xl-4 wow fadeInRight" data-wow-delay="0s">
         
              <article class="team-classic"><a class="team-classic-figure" href="#"><img src="images/team-1-370x406.jpg" alt="" width="370" height="406"/></a>
                <div class="team-classic-caption">
                  <h5 class="team-classic-name"><a href="#">Ryan Wilson</a></h5>
                  <p class="team-classic-status">Founder</p>
                </div>
              </article>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4 wow fadeInRight" data-wow-delay=".1s">
  
              <article class="team-classic"><a class="team-classic-figure" href="#"><img src="images/team-2-370x406.jpg" alt="" width="370" height="406"/></a>
                <div class="team-classic-caption">
                  <h5 class="team-classic-name"><a href="#">Jill Peterson</a></h5>
                  <p class="team-classic-status">Garden Manager</p>
                </div>
              </article>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4 wow fadeInRight" data-wow-delay=".2s">
            
              <article class="team-classic"><a class="team-classic-figure" href="#"><img src="images/team-3-370x406.jpg" alt="" width="370" height="406"/></a>
                <div class="team-classic-caption">
                  <h5 class="team-classic-name"><a href="#">Sam Robinson</a></h5>
                  <p class="team-classic-status">Farmyard Coordinator</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
     
    
      <section class="section section-md bg-info section-top-image" id="gallery" data-type="anchor">
        <div id = "Gallery" class="container">
          <div class="oh h2-title">
            <h2 class="wow slideInUp" data-wow-delay="0s">Our Gallery</h2>
          </div>
          <div class="row row-30" data-lightgallery="group">
            <div class="col-sm-6 col-lg-4">
              <div class="oh-desktop">
             
                <article class="thumbnail thumbnail-mary thumbnail-sm wow slideInLeft" data-wow-delay="0s">
                  <div class="thumbnail-mary-figure"><img src="images/grid-gallery-1-370x303.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-1-1200x800.jpg" data-lightgallery="item"><img src="images/grid-gallery-1-370x303.jpg" alt="" width="370" height="303"/></a>
                    <h4 class="thumbnail-mary-title"><a href="#">Watermelons</a></h4>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="oh-desktop">
               
                <article class="thumbnail thumbnail-mary thumbnail-sm wow slideInUp" data-wow-delay=".1s">
                  <div class="thumbnail-mary-figure"><img src="images/grid-gallery-2-370x303.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-2-1200x800.jpg" data-lightgallery="item"><img src="images/grid-gallery-2-370x303.jpg" alt="" width="370" height="303"/></a>
                    <h4 class="thumbnail-mary-title"><a href="#">Grapes</a></h4>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="oh-desktop">
                
                <article class="thumbnail thumbnail-mary thumbnail-sm wow slideInRight" data-wow-delay=".0s">
                  <div class="thumbnail-mary-figure"><img src="images/grid-gallery-3-370x303.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-3-800x1200.jpg" data-lightgallery="item"><img src="images/grid-gallery-3-370x303.jpg" alt="" width="370" height="303"/></a>
                    <h4 class="thumbnail-mary-title"><a href="#">Mandarin Oranges</a></h4>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="oh-desktop">
               
                <article class="thumbnail thumbnail-mary thumbnail-sm wow slideInUp" data-wow-delay=".1s">
                  <div class="thumbnail-mary-figure"><img src="images/grid-gallery-4-370x303.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-4-800x1200.jpg" data-lightgallery="item"><img src="images/grid-gallery-4-370x303.jpg" alt="" width="370" height="303"/></a>
                    <h4 class="thumbnail-mary-title"><a href="#">Lemons</a></h4>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="oh-desktop">
               
                <article class="thumbnail thumbnail-mary thumbnail-sm wow slideInLeft" data-wow-delay="0s">
                  <div class="thumbnail-mary-figure"><img src="images/grid-gallery-5-370x303.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-5-800x1200.jpg" data-lightgallery="item"><img src="images/grid-gallery-5-370x303.jpg" alt="" width="370" height="303"/></a>
                    <h4 class="thumbnail-mary-title"><a href="#">Organic Food</a></h4>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="oh-desktop">
               
                <article class="thumbnail thumbnail-mary thumbnail-sm wow slideInDown" data-wow-delay=".1s">
                  <div class="thumbnail-mary-figure"><img src="images/grid-gallery-6-370x303.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-6-1200x800.jpg" data-lightgallery="item"><img src="images/grid-gallery-6-370x303.jpg" alt="" width="370" height="303"/></a>
                    <h4 class="thumbnail-mary-title"><a href="#">Salad</a></h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div  class="section footer-variant-2 footer-modern context-dark section-top-image section-top-image-dark">

</div>
     
      <section class="section section-md section-last bg-info" id="contacts-us" data-type="anchor">
        <div id="ContactUs" class="container">
          <div class="oh h2-title">
            <h2 >Get in Touch</h2>
          </div>
         
          <div class="row row-50">
            <div class="col-lg-6">
              <div > <MapContainer />
              </div>
            </div>
            <div class="col-lg-6">
              <form class="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div class="row row-14 gutters-14">
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-first-name" type="text" name="name" data-constraints="@Required" />
                      <label class="form-label" for="contact-first-name">First Name</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-last-name" type="text" name="name" data-constraints="@Required" />
                      <label class="form-label" for="contact-last-name">Last Name</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-email" type="email" name="email" data-constraints="@Email @Required" />
                      <label class="form-label" for="contact-email">E-mail</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label class="form-label" for="contact-message">Message</label>
                      <textarea class="form-input" id="contact-message" name="message" data-constraints="@Required"></textarea>
                    </div>
                  </div>
                </div>
                <button class="button button-primary button-pipaluk" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
        <div>
          
        </div>
       
      </section>

     
      <footer class="section footer-variant-2 footer-modern context-dark section-top-image section-top-image-dark">
        <div class="footer-variant-2-content">
          <div class="container">
            <div class="row row-40 justify-content-between">
              <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="oh-desktop">
                  <div class="wow slideInRight" data-wow-delay="0s">
                    <div class="footer-brand"><a href="#"><img src="images/logo.jpg" alt="" width="151" height="35"/></a></div>
                    <p>Raw and Rows is an organic farm located in Dubai. We offer healthy foods and products to our clients.</p>
                    <ul class="footer-contacts d-inline-block d-md-block">
                      <li>
                        <div class="unit unit-spacing-xs">
                          <div class="unit-left"><span class="icon fa fa-phone"></span></div>
                          <div class="unit-body"><a class="link-phone" href="tel:#">+1 323-913-4688</a></div>
                        </div>
                      </li>
                      <li>
                        <div class="unit unit-spacing-xs">
                          <div class="unit-left"><span class="icon fa fa-clock-o"></span></div>
                          <div class="unit-body">
                            <p>Mon-Sat: 07:00AM - 05:00PM</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="unit unit-spacing-xs">
                          <div class="unit-left"><span class="icon fa fa-location-arrow"></span></div>
                          <div class="unit-body"><a class="link-location" href="#">4730 Crystal Springs Dr, Los Angeles, CA 90027</a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="oh-desktop">
                  <div class="inset-top-18 wow slideInDown" data-wow-delay="0s">
                    <h5>Newsletter</h5>
                    <p>Join our email newsletter for news and tips.</p>
                    <form class="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                      <div class="form-wrap">
                        <input class="form-input" id="subscribe-form-5-email" type="email" name="email" data-constraints="@Email @Required" />
                        <label class="form-label" for="subscribe-form-5-email">Enter Your E-mail</label>
                      </div>
                      <button class="button button-block button-white" type="submit">Subscribe</button>
                    </form>
                    <div class="group-lg group-middle">
                      <p class="text-white">Follow Us</p>
                      <div>
                        <ul class="list-inline list-inline-sm footer-social-list-2">
                          <li><a class="icon fa fa-facebook" href="#"></a></li>
                          <li><a class="icon fa fa-twitter" href="#"></a></li>
                          <li><a class="icon fa fa-google-plus" href="#"></a></li>
                          <li><a class="icon fa fa-instagram" href="#"></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-xl-3">
                <div class="oh-desktop">
                  <div class="inset-top-18 wow slideInLeft" data-wow-delay="0s">
                    <h5>Gallery</h5>
                    <div class="row row-10 gutters-10">
                      <div class="col-6 col-sm-3 col-lg-6">
                        
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-1-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-7-800x1200.jpg" data-lightgallery="item"><img src="images/gallery-image-1-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                      <div class="col-6 col-sm-3 col-lg-6">
                      
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-2-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-8-1200x800.jpg" data-lightgallery="item"><img src="images/gallery-image-2-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                      <div class="col-6 col-sm-3 col-lg-6">
                    
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-3-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-9-800x1200.jpg" data-lightgallery="item"><img src="images/gallery-image-3-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                      <div class="col-6 col-sm-3 col-lg-6">
                       
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-4-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-10-1200x800.jpg" data-lightgallery="item"><img src="images/gallery-image-4-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-variant-2-bottom-panel">
          <div class="container">
       
            <div class="group-sm group-sm-justify">
              <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span> <span>GreenDay</span>. All rights reserved. Design&nbsp;by&nbsp;<a href="https://zemez.io/">Zemez</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div class="snackbars" id="form-output-global"></div>
    </div>







   </>
    )
}

export default Home;