import React, { Component } from 'react'  
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBox
} from 'mdbreact';


export class Medicalequipments extends Component { 
    constructor(props) {
        super(props);
        this.state = { listOfImages: [] };
      }
    importAll(r) {
        return r.keys().map(r)
      }
      componentWillMount() {
      const  listImages = this.importAll(require.context('./images/medical', false, /\.(jpg)$/));
      console.log(listImages);
      this.setState({
        listOfImages: listImages
      });
    }
    render() {  
        return (  
            
             <div>
             <MDBContainer>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol size="6"></MDBCol>
        <MDBCol>3 of 3</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol size="5">   </MDBCol>
        <MDBCol>3 of 3</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol ></MDBCol>
        <MDBCol><br /></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol> </MDBCol>
        <MDBRow>
        <MDBCol> </MDBCol>
        </MDBRow>
        
        <MDBCol>here you can write a text here you can write a text here you can dddwrite a text here you can write a text here you can write a text </MDBCol>
       <MDBCol>
       <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        multiItem
        showControls={false}
        showIndicators={false}
      >
        <MDBCarouselInner>
        <MDBRow>
        
   
         


 <MDBCarouselItem itemId='1'>
              <MDBCol md='5'>
              <Carousel >
            {this.state.listOfImages.map((image, index) => (
              <img src={image.default} key={index} alt={index} ></img>
         
            ))}
           </Carousel>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
       </MDBCol>
     
      </MDBRow>
      
      {/* <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        multiItem
        showControls={false}
        showIndicators={false}
      >
        <MDBCarouselInner>
        <MDBRow>
        
   
         


 <MDBCarouselItem itemId='1'>
              <MDBCol md='5'>
              <Carousel >
            {this.state.listOfImages.map((image, index) => (
              <img src={image.default} key={index} alt={index} ></img>
         
            ))}
           </Carousel>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel> */}
    </MDBContainer>
           {/* <MDBContainer>
           <MDBRow>
  <MDBCol md='5'></MDBCol>
  <MDBCol md='5'><br /></MDBCol><MDBCol md='5'></MDBCol>

  </MDBRow>   
      <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        multiItem
        showControls={false}
        showIndicators={false}
      >
        <MDBCarouselInner>
        <MDBRow>
        
   
          </MDBRow>
          <MDBRow>
  <MDBCol md='4'><p>asdasds</p></MDBCol>

 <MDBCarouselItem itemId='1'>
              <MDBCol md='5'>
              <Carousel >
            {this.state.listOfImages.map((image, index) => (
              <img src={image.default} key={index} alt={index} ></img>
         
            ))}
           </Carousel>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer> */}
     
       
   
             </div>

        )
    }
}
export default Medicalequipments 