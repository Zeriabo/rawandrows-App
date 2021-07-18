
    import React, { Component } from 'react';  
    import  MapContainer from "./MyMap";
    
    export class ContactUs extends Component {  
        loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
      
        render() {  
            return ( 
    
              <div>
                <p style={{fontSize: 40 + 'px'}}>Address Map:</p>
                 <MapContainer />
    
                 <br />  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
               
              </div>
              
           
           
            )  
        }  
    }  
      
    export default ContactUs  