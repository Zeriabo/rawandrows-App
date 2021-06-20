import React, { Component } from 'react'  



export class Home extends Component {  
    render() {  
        return (  
            
             <div>
              
              <section className="clean-block clean-hero" >
            <div  className="text"  >
                <br />   <br />
                <font size="3" face="Courier New" >
                <table border='0' width="100%">
                <thead>
                </thead>
             
                   
                </table>
                </font>
            
  
            </div>
        </section>
        <header class="masthead" >
        <div class="container">
            <div class="intro-text">
                
                <div class="intro-lead-in">
                <div class="embed-responsive embed-responsive-16by9"> 
    <video width="200" height="350" autoPlay controls >
        <source src="/Videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video element. Kindly update it to latest version.
    </video>
</div> 

                </div>

            </div>
        </div>
    </header>
        <section id="services">
            <div className="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="text-uppercase section-heading">Services</h2>
                    <br />
                    <h3 class="text-muted section-subheading">Raw&Rows services</h3>
                    <br />
                   

                </div>
                
            </div>
            <div class="row text-center">
                <div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i></span>
                    <h4 class="section-heading">E-Commerce</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-laptop fa-stack-1x fa-inverse"></i></span>
                    <h4 class="section-heading"><strong>A-Z project management&nbsp;</strong></h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-lock fa-stack-1x fa-inverse"></i></span>
                    <h4 class="section-heading"><strong>Food stands</strong></h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <hr size="8" width="90%" color="black" />  
                <div class="col-md-11"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-lock fa-stack-1x fa-inverse"></i></span>
                    <h4 class="section-heading"><strong>Medical equipments</strong></h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
            </div>
        </section>
       
   
             </div>

        )
    }
}
export default Home 