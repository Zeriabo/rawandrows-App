import React, { Component } from 'react';


import { BrowserRouter as    Prompt,withRouter,Switch} from 'react-router-dom'; // eslint-disable-line no-unused-vars
import logo from './images/logo.jpg'




export class Header extends Component {  
    render() {  
        return (  
            <div>
               <nav class="navbar navbar-light navbar-expand-lg fixed-top clean-navbar" id="mainNav">
               <a href='./Home' > <img alt="rowAndraws" src={logo} width='100'/></a> 
               <div className="container"><a className="navbar-brand" id="brand-logo" href="/Home"> </a>
            <nav className="navbar navbar-light navbar-expand-md">
                <div className="container-fluid">
                    <div><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation">
                                <div><a className="nav-link" href="/Home">Home</a></div></li>
                                <li className="nav-item" role="presentation">
                                <div><a className="nav-link" href="/Services">Services</a></div></li>
                                <li className="nav-item" role="presentation">
                                <div><a className="nav-link" href="/Portfolio">Portfolio</a></div></li>
                                <li className="nav-item" role="presentation">
                                
                                <div><a className="nav-link" href="/Medicalequipments">Medical equipments</a></div></li>
                                <li className="nav-item" role="presentation">
                               
                                <div><a className="nav-link" href="/Team">Team</a></div></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/Contact">Contact</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/about">About</a></li>
                    
                  
                        </ul>
                    </div>
                    
                    
                </div>
            </nav>
        </div>
    </nav>
              
       
             </div>

        )
    }
}
export default withRouter(Header) 