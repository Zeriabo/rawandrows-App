
    import React, { Component } from 'react';   
  
    //import Router from './Router'

   
  
    export class Intro extends Component {  
        loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
      
        render() {  
            return ( 
                <div >
               <video className='videoTag' autoPlay loop muted>
    <source src="Videos/Intro.mp4" type='video/mp4' />
</video> 
           
              </div>
            )  
        }  
    }  
      
    export default Intro  