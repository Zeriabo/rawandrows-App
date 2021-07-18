
    import React, { Component } from 'react';  
    import { Slide } from 'react-slideshow-image';

    const slideImages = [
        'images/medical/1.jpg',
        'images/medical/2.jpg',
        'images/medical/3.jpg',
        'images/medical/4.jpg',
        'images/medical/5.jpg',
        'images/medical/6.jpg',
        'images/medical/7.jpg',
        'images/medical/8.jpg',
        'images/medical/9.jpg',
        'images/medical/10.jpg',
        'images/medical/11.jpg',
        'images/medical/12.jpg',
        'images/medical/13.jpg',
        'images/medical/14.jpg',
        'images/medical/15.jpg',
        'images/medical/16.jpg',
        'images/medical/17.jpg',
        'images/medical/18.jpg',
        'images/medical/19.jpg',
        'images/medical/20.jpg',
        'images/medical/21.jpg',

    
      ];
      const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        width: '100%',

        height: '100%'
      }

    export class MedicalEquipment extends Component {  
        loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
      
        render() {  
            return ( 
           <div class="diviSlide">  
           <Slide {...properties}>
           {slideImages.map(d => (<div className="each-fade">
        <div style={{'backgroundImage': `url(${d})`}}>
          <span>Slide 1</span>
        </div>
      </div>))
      
      
      }
    
            </Slide>
      </div>
 
    
           
           
             
       
    
       
              
           
           
            )  
        }  
    }  
      
    export default MedicalEquipment  