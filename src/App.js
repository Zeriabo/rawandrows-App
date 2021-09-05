
import './App.scss';
import NavBar from "./Components/NavBar"
import Services from "./Components/Services";
import MedicalEquipment from "./Components/MedicalEquipments";
import Contactus from "./Components/ContactUs";
import Home from './Components/Home';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';
import Animate from 'rc-animate';
import { Parallax } from 'rc-scroll-anim';
import { Link } from 'react-scroll';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
 <Router>
   
        <NavBar />
      
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/Home" component={Home}>
        <br />
       
        <br />
           <Home />
             
            
          </Route>
   
          <Route path="/Services" >
              <Services />
          </Route>
          <Route path="/MedicalEquipments" component={MedicalEquipment}>
            <MedicalEquipment />
          </Route>
          <Route path="/AboutUs" component={AboutUs}>
            <AboutUs />
          </Route>
     
       
        </Switch>
        
    </Router>

  
    </div>
    
  );
}

export default App;
